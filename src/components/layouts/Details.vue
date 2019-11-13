<template>
  <div class="wrapper">
    <div class="container">
      <div class="forum-questions-sec">
        <div class="row">
          <div class="col-lg-8">
            <div class="forum-post-view">
              <div class="usr-question">
                <div class="usr_img">
                  <img src="../../assets/usy2.png" alt />
                </div>
                <div class="usr_quest">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <span>
                    <i class="fa fa-clock-o"></i>3 min ago
                  </span>
                  <ul class="react-links">
                    <li>
                      <a href="#" title>
                        <i class="fa fa-heart"></i> Vote 150
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        <i class="fa fa-share-alt"></i> Share
                      </a>
                    </li>
                  </ul>
                  <p style="padding-top:0.5rem;">我就想知道 上班可不可以摸鱼</p>
                  <div class="comment-section">
                    <h3>03 Comments</h3>
                    <div class="comment-sec">
                      <ul>
                        <li>
                          <div class="comment-list">
                            <div class="bg-img">
                              <img src="../../assets/usy2.png" alt />
                            </div>
                            <div class="comment">
                              <h3>John Smith</h3>
                              <span>
                                <img src="../../assets/clock.png" alt /> 3 min ago
                              </span>
                              <p>摸啊</p>
                            </div>
                          </div>
                          <!--comment-list end-->
                        </li>
                        <li>
                          <div class="comment-list">
                            <div class="bg-img">
                              <img src="../../assets/usy2.png" alt />
                            </div>
                            <div class="comment">
                              <h3>John Doe</h3>
                              <span>
                                <img src="../../assets/clock.png" alt /> 3 min ago
                              </span>
                              <p>气氛搞起来</p>
                            </div>
                          </div>
                          <!--comment-list end-->
                        </li>
                        <li>
                          <div class="comment-list">
                            <div class="bg-img">
                              <img src="../../assets/usy2.png" alt />
                            </div>
                            <div class="comment">
                              <h3>John Doe</h3>
                              <span>
                                <img src="../../assets/clock.png" alt /> 3 min ago
                              </span>
                              <p>可以可以</p>
                            </div>
                          </div>
                          <!--comment-list end-->
                        </li>
                      </ul>
                    </div>
                    <!--comment-sec end-->
                  </div>
                </div>
                <!--usr_quest end-->
              </div>
              <!--usr-question end-->
            </div>
            <!--forum-post-view end-->
            <div class="post-comment-box">
              <h3>03 Comments</h3>
              <div class="user-poster">
                <div class="usr-post-img">
                  <img src="../../assets/usy2.png" alt />
                </div>
                <div class="post_comment_sec">
                  <form>
                    <textarea placeholder="Your Answer"></textarea>
                    <button type="submit">回复</button>
                  </form>
                </div>
                <!--post_comment_sec end-->
              </div>
              <!--user-poster end-->
            </div>
            <!--post-comment-box end-->
          </div>
        </div>
      </div>
      <!--forum-questions-sec end-->
    </div>
    <div class="overview-box" id="question-box">
      <div class="overview-edit">
        <h3>Ask a Question</h3>
        <form>
          <input type="text" name="question" placeholder="Type Question Here" />
          <input type="text" name="tags" placeholder="Tags" />
          <textarea placeholder="Description"></textarea>
          <button type="submit" class="save">Submit</button>
          <button type="submit" class="cancel">Cancel</button>
        </form>
        <a href="#" title class="close-box">
          <i class="la la-close"></i>
        </a>
      </div>
      <!--overview-edit end-->
    </div>
    <!--overview-box end-->
  </div>
  <!--theme-layout end-->
</template>


<style  lang="scss">
@import "../../styles/style.css";
@import "../../styles/line-awesome.css";
</style>