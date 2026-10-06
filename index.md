---
title:
summary: Research scientist studying pulsar timing noise for nanohertz gravitational-wave detection.
---
<h1 class="visually-hidden">{{ site.title }}</h1>

<div class="intro">
<div markdown="1">

I am a research scientist at the [SETI Institute](https://www.seti.org/) working with the [NANOGrav Collaboration](https://nanograv.org).
{: .lead}

I work to construct the most sensitive pulsar timing array possible, a Galactic-scale detector of nanohertz-frequency gravitational waves. My research involves understanding the contributions of all kinds of noise sources in the timing of our millisecond pulsars, and using that information to mitigate the impacts and achieve the highest possible precision and accuracy in our measurements.

More on my [research](/research/), the [group](/research/group/), or my [CV]({{ site.cv }}).

</div>
<img class="portrait" src="{{ site.portrait | relative_url }}" alt="Portrait of {{ site.title }}" width="192" height="240">
</div>

## Recent notes

<ul class="entries">
{%- assign recent = site.notes | sort: "date" | reverse -%}
{%- for note in recent limit: 3 %}
  <li><a href="{{ note.url | relative_url }}">{{ note.title }}</a>
    <p class="meta">{{ note.date | date: "%-d %B %Y" }}</p></li>
{%- endfor %}
</ul>
