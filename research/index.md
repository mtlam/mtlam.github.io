---
title: Research
---

I am interested in understanding the different processes that lead to noise in our pulsar timing array detector. My active areas of research include:

+ Planning for pulsar observations with future telescopes, such as the Deep Synoptic Array
+ Modeling pulsar noise, both in characterization and in extrapolation, from intrinsic sources to measurement effects
+ Interstellar medium propagation effects, such as scattering, scintillation, and dispersion measure variations

## Collaboration Roles

I am co-chair of NANOGrav's Cyber-Infrastructure Working Group, co-lead the production of the 20-Year Data Set, and lead the Chromatic Task Force. I've previously served as co-chair of the Noise Budget Working Group, served on the collaboration's Management Team, and co-led the production of the 12.5-Year Data Set.

## Paper Summaries

Illustrated one-page summaries of selected papers. [See all of them](papers/), or the full publication list in my [CV]({{ site.cv }}).

<ul class="entries">
{%- assign papers = site.papers | sort: "date" | reverse -%}
{%- for p in papers limit: 3 %}
  <li><a href="{{ p.url | relative_url }}">{{ p.short_title | default: p.title }}</a>
    <p class="meta">{{ p.journal }}, {{ p.date | date: "%Y" }}</p></li>
{%- endfor %}
</ul>

## Research Group

I currently work with one postdoctoral researcher at the SETI Institute. I've previously advised high school, undergraduate, and graduate students. See the [group page](group/) for current members and alumni.
