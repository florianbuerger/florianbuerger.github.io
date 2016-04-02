---
layout: default
title: Blog
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-list-entry">
        <span class="post-meta">{{ post.date | date: '%B %d, %Y' }}</span><br/>
        <a href="{{ post.url }}" class="minimal-link post-title">{{ post.title }}</a>
        <a href="{{ post.url }}" class="minimal-link"><p class="post-list-excerpt">→ {{ post.excerpt | strip_html }}</p></a>
    </li>
  {% endfor %}
</ul>
