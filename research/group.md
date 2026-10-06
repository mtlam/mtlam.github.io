---
title: Group
---
Current members and <i>some select</i> alumni of my research group. While I no longer take on students in my current role, {% include email.html text="send me an email" %} regarding questions about my research group.

## Current

<ul class="entries">
{%- for p in site.data.group.current %}
  <li><span class="name">{% if p.url %}<a href="{{ p.url }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</span>, {{ p.role }}, since {{ p.since }}
    {%- if p.topic %}<p>{{ p.topic }}</p>{% endif %}</li>
{%- endfor %}
</ul>

## Alumni

<ul class="entries">
{%- for p in site.data.group.alumni %}
  <li><span class="name">{% if p.url %}<a href="{{ p.url }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</span>, {{ p.role }}, {{ p.years }}
    {%- if p.topic %}<p>{{ p.topic }}</p>{% endif %}
    {%- if p.now %}<p class="meta">Now: {{ p.now }}</p>{% endif %}</li>
{%- endfor %}
</ul>
