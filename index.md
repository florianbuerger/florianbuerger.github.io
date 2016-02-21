---
layout: default
---

<h1>Hello 👋🏼</h1>

<p>My name is Florian. I am a software engineer and designer. I travel the world with my <a href="http://verenaortlieb.com">lovely wife</a>.</p>

<h1>Projects 📱</h1>

<p>I work on all kinds of projects including UI/UX design for all mobile operating systems, iOS development, project management and support.
I started iOS, nay iPhone OS development back in 2007 when the first iPhone was released even before the App Store existed—a jailbreak was required. I’ve been working on mobile projects ever since. <a href="/hire">If you need help, hire me</a>.</p>

<h1>Latest post ✏️</h1>

{% for post in site.posts limit:1 %}
<a href="{{ post.url }}" class="minimal-link">→ {{ post.excerpt | strip_html }}
{% endfor %}
