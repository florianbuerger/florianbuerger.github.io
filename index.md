---
layout: default
---

<div class="home" markdown="1">

# Hello

# Latest post

{% for post in site.posts limit:1 %}
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt | strip_html}}
{% endfor %}


# Work

I work on all kinds of projects including UI/UX design for all mobile operating systems, iOS development, project management and support.

I started iOS, nay iPhone OS development back in 2007 when the first iPhone was released even before the App Store existed—a jailbreak was required. I’ve been working on mobile projects ever since.

<!--   <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul> -->

<!--   <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
 -->
</div>
