---
layout: default
---

<div class="home" markdown="1">

# Hello

I am a software engineer and designer. Currently I travel the world with my [lovely wife](http://verenaortlieb.com). 

# Work

I work on all kinds of projects including UI/UX design for all mobile operating systems, iOS development, project management and support.
I started iOS, nay iPhone OS development back in 2007 when the first iPhone was released even before the App Store existed—a jailbreak was required. I’ve been working on mobile projects ever since.

# Latest post

{% for post in site.posts limit:1 %}
  <a href="{{ post.url }}">{{ post.title }}</a>
  {{ post.excerpt | strip_html}}
{% endfor %}

</div>
