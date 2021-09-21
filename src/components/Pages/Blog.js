import React, { Component } from "react";
import img_blog from "../../img/facebook.jpg";

class Blog extends Component {
  render() {
    return (
      <>
        <div className="main" id="nav-close">
          <div className="banner-text">
            <h2>Blog</h2>
          </div>

          <div className="blog">
            <img src={img_blog} className="card-img-top" alt="some value"></img>

            <div className="card-body">
              <h3> facebook এর ওপরে ডিপেন্ড না হয়ে আমারা নিজেরাই একটা প্লাটফর্ম
                রেডি করতে পারি।</h3>
              <p className="card-text text-justify">
                
              </p>

              <p className="card-text text-justify">
              #১. ওয়েবসাইট একটা ইউজার ফেন্ডলি ওয়েবসাইট থাকলে
                কাষ্টমার খুব সহজেই নিজের প্রোয়োজন অনুযায়ী কেনা কাটা করতে পারবে।
              
              </p>

              <p className="card-text text-justify">  #২. মোবাইল আপ্লিকেশন মোবাইল আপ্লিকেশন এর মাধ্যমে পুশ নোটিফিকেশন,
                ডিসকাউন্ট, বিভিন্ন প্রমোশনাল অফার খুব সহজেই পাঠানো সম্ভব।
                তাছাড়াও একটা মোবাইল আপ্লিকেশন এর মাধ্যমে রেগুলার সেল করা সম্ভব।
              </p>
              <p className="card-text text-justify"> #৩. SEO শুধু ওয়েব সাইট ও আ্যাপ থাকলেই হবে না, নিয়মিত কন্টেন তৈরি
                করে হবে, seo friendly পোস্ট আপডেট করতে হবে। </p>
              <p className="card-text text-justify"> #৪. Keyword Research
                আমরা যা লেখে সার্চ করি তাই হলো keyword , পোস্ট আপডেট করার সময়
                প্রোডাক্ট অনুযায়ী keyword research করতে হবে।</p>

             
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Blog;
