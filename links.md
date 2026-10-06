---
title: Links
---
{% for g in site.data.links %}
<h2>{{ g.group }}</h2>
<ul class="entries">
{%- for l in g.links %}
  <li>{% if l.url %}<a href="{{ l.url }}">{{ l.name }}</a>{% else %}<span class="name">{{ l.name }}</span>{% endif %}
    {%- if l.note %}<p class="meta">{{ l.note }}</p>{% endif %}</li>
{%- endfor %}
</ul>
{% endfor %}
