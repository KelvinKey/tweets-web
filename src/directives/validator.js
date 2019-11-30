function validate (el, modifiers, bindingValue) {
  bindingValue = bindingValue && typeof bindingValue === 'object' ? bindingValue : {}
  const value = typeof el.value === 'string' ? el.value.trim() : ''
  const { title = '该项', error } = bindingValue
  let defaultError = ''

  if (modifiers.required && value === '') {
    defaultError = `${title}不能为空`
  } else if (bindingValue.target) {
    const target = document.querySelector(bindingValue.target)
    const targetValue = target ? target.value : null

    if (targetValue !== value) {
      defaultError = `输入的${title}不匹配`
    }
  } else if (bindingValue.regex) {
    try {
      if (!bindingValue.regex.test(value)) {
        defaultError = `${title}格式不正确`
      }
    } catch (e) {}
  }

  if (defaultError) {
    if (error === undefined) {
      showError(el, defaultError)
    } else {
      showError(el, error)
    }
  } else {
    showError(el)
  }

  checkIsCanSubmit(el)
}

function showError (el, error) {
  const parentElement = el.parentElement
  const errorElement = getErrorElement(el)

  if (error === undefined) {
    errorElement.style.display = 'none'
    parentElement.classList.remove('has-error')
  } else {
    errorElement.textContent = error
    errorElement.style.display = 'block'
    parentElement.classList.add('has-error')
  }
}

function getErrorElement (el) {
  const parentElement = el.parentElement
  let errorElement = parentElement.querySelector('.help-block')

  if (!errorElement) {
    const tpl = `<span class="help-block"></span>`
    const fragment = document.createRange().createContextualFragment(tpl)

    parentElement.appendChild(fragment)
    errorElement = parentElement.querySelector('.help-block')
  }

  return errorElement
}

function checkIsCanSubmit (el) {
  // 指定当前一系列验证项的父级，我们这里指定为含 data-validator-form 的元素
  const form = el.closest('[data-validator-form]')
  // 指定一个按钮来检查所有验证项，我们这里指定为含 type=submit 的元素
  const submitBtn = form.querySelector('[type=submit]')
  // 获取错误信息
  const errors = form.querySelectorAll('.has-error')
  // 通过有无错误信息来控制是否可以提交
  submitBtn.canSubmit = !errors.length
}

export default {
  bind (el, binding, vnode) {
    const { value, arg, modifiers } = binding
    const eventType = ['change', 'blur', 'input'].indexOf(arg) !== -1 ? arg : 'change'
    const defaultHandler = () => {
      showError(el)
    }
    const handler = () => {
      validate(el, modifiers, value)
    }

    el.addEventListener('input', defaultHandler, false)
    el.addEventListener(eventType, handler, false)

    el.destroy = () => {
      el.removeEventListener('input', defaultHandler, false)
      el.removeEventListener(eventType, handler, false)
      el.destroy = null
    }

    // 当页面加载完毕后就检查是否可以提交
    window.onload = () => checkIsCanSubmit(el)
  },
  inserted (el, binding, vnode) {
    const { value, modifiers } = binding
    const form = el.closest('[data-validator-form]')
    const submitBtn = form ? form.querySelector('[type=submit]') : null

    if (submitBtn) {
      const submitHandler = () => validate(el, modifiers, value)

      el.destroySubmitBtn = () => {
        submitBtn.removeEventListener('click', submitHandler, false)
        el.destroySubmitBtn = null
      }
    }
  },
  unbind (el) {
    el.destroy()
    if (el.destroySubmitBtn) el.destroySubmitBtn()
  },
  showError
}
