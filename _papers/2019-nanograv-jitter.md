---
title: "The NANOGrav 12.5-year Data Set: The Frequency Dependence of Pulse Jitter in Precision Millisecond Pulsars"
short_title: Frequency dependence of pulse jitter
date: 2019-02-25
journal: The Astrophysical Journal
journal_url: https://iopscience.iop.org/article/10.3847/1538-4357/ab01cd/meta
arxiv: 1809.03058
summary: Jitter is detected in 43 of 48 NANOGrav pulsars, and in 30 it changes significantly with radio frequency, best described by a power law.
thumb: /assets/papers/jitter-12p5/J2145_waterfall_joy.png
authors_short: M. T. Lam, M. A. McLaughlin, et al. (NANOGrav Collaboration)
authors: M. T. Lam, M. A. McLaughlin, Z. Arzoumanian, H. Blumer, P. R. Brook, H. T. Cromartie, P. B. Demorest, M. E. DeCesar, T. Dolch, J. A. Ellis, R. D. Ferdman, E. C. Ferrara, E. Fonseca, N. Garver-Daniels, P. A. Gentile, M. L. Jones, D. R. Lorimer, R. S. Lynch, C. Ng, D. J. Nice, T. T. Pennucci, S. M. Ransom, R. Spiewak, I. H. Stairs, K. Stovall, J. K. Swiggum, S. J. Vigeland, W. W. Zhu
links:
  - name: NANOGrav data
    url: https://data.nanograv.org/
---
We analyzed the NANOGrav 12.5-year data set for **pulse jitter**: individual pulses look different from the very stable average pulse shape, which adds uncertainty to our times of arrival. Pulsar timing experiments must therefore model jitter as a significant source of noise in our Galactic-scale detector. Its dependence on radio frequency had been studied over broad ranges, including in our [9-year data set analysis](https://iopscience.iop.org/article/10.3847/0004-637X/819/2/155/meta), but this is the first study of the functional form of that dependence. We detected jitter in **43 of the 48 pulsars** analyzed, with **30 showing significant frequency dependence**.
{: .lead}

## The randomness of pulse shapes

{% include figure.html src="/assets/papers/jitter-12p5/J2145_waterfall_joy.png" alt="Stacked pulses from PSR J2145-0750 varying around the average profile" caption="Jitter in PSR J2145−0750. Each trace averages 10 consecutive pulses, yet they still vary around the very stable average pulse at top. From [Science with the Next-Generation VLA and Pulsar Timing Arrays](https://arxiv.org/abs/1810.06594)." %}

- The "miracle" of pulsar timing relies on the **average pulse shape being very stable**. Over decades, we can determine when a set of pulses arrives at our telescopes very precisely.
- Since the discovery of pulsars, it has been known that individual pulses do not resemble the average. The **climate** of the pulsar magnetosphere is extremely stable, but there is significant **weather** from one rotation to the next.
- A time of arrival (TOA) comes from fitting a template pulse shape to the data, assuming the data are an exact scaled and shifted copy of the template. Because the average is built from individual pulses of different shapes, that matched-filtering assumption breaks, and **we must account for jitter in our TOA uncertainties**.
- Characterizing and modeling noise in our timing data is a prime focus of NANOGrav's **Noise Budget** working group.

## The NANOGrav 12.5-year data set

{% include figure.html side="left" src="/assets/papers/jitter-12p5/nano11yr_pulsardist.png" alt="Sky map of NANOGrav pulsars" caption="Sky map of pulsars in the 11-year data set. Circle areas are proportional to the number of TOAs; color shows the timing baseline. The 12.5-year data set adds three more pulsars." %}

- The data set contains radio pulse TOAs and timing models for **48 millisecond pulsars**.
- Observations span roughly **12.9 years**, from July 2005 to June 2017. J1744−1134 has the longest baseline at 12.87 years; J1713+0747 has the most data, with 40,000 TOAs.
- Observations used the 100-m Robert C. Byrd **Green Bank Telescope** of the [Green Bank Observatory](http://greenbankobservatory.org/telescopes/gbt/) and the 305-m William E. Gordon Telescope at **Arecibo** Observatory.

## Short-term timing residuals

{% include figure.html src="/assets/papers/jitter-12p5/J1713+0747.png" alt="Short-term timing residuals versus signal-to-noise ratio for PSR J1713+0747 in three frequency bands" caption="Short-term timing residuals against pulse S/N for PSR J1713+0747 at 820 MHz (red), 1400 MHz (gray), and 2300 MHz (blue). Without jitter, the spread would shrink to zero at high S/N; instead it levels off." %}

- Rather than use the final TOAs, we returned to the calibrated profiles at finer time resolution, typically 1- or 2-minute integrations, to **probe jitter on short timescales**, using the NANOGrav package [PyPulse](https://mtlam.github.io/PyPulse/).
- For each observation we fit a small correction to the timing model and removed all frequency-dependent delays (unknown dispersion, profile evolution, and more), leaving **short-term timing residuals**.
- Plotted against S/N, the residuals' spread would vanish at high S/N if there were no jitter. Instead it stays constant, the signature of the **random nature of jitter**.
- The interstellar medium also changes pulse shapes slightly. We predicted the amplitude of this **scintillation noise from scattering measurements**, as in our [9-year analysis](https://arxiv.org/abs/1601.04490).

## Modeling the frequency dependence

{% include figure.html side="left" src="/assets/papers/jitter-12p5/timedepJ1713+0747.png" alt="Preferred jitter models for PSR J1713+0747 by year" caption="The most preferred jitter models for PSR J1713+0747, fitting each year independently." %}

- We compared **five models for the frequency dependence**: constant with frequency, constant within each band, power law, power law plus a constant, and a log polynomial.
- Parameters came from **maximum-likelihood fits** built on the [emcee](https://emcee.readthedocs.io) Markov chain Monte Carlo package.
- Jitter was significant in 43 of 48 pulsars, compared with 22 of 37 in our [previous 9-year analysis](https://arxiv.org/abs/1512.08326), and **significant frequency dependence appeared in 30 pulsars**.
- Comparing models with the Bayesian Information Criterion, the **power law was most often preferred**.

## The statistics of jitter

{% include figure.html src="/assets/papers/jitter-12p5/kJ.png" alt="Probability density of the jitter parameter across pulsars" caption="Distribution of the jitter parameter: the single-pulse jitter amplitude divided by the pulse period." %}

- The amplitude varies by pulsar, but a good **rule of thumb** is that jitter timing variations are about 1% of the pulse period.
- Jitter correlates with pulse width and with the number of components in the profile. Because **pulse shapes are complex**, our method condenses the timing variations into one number per pulsar per frequency.
- For the bright pulsar B1937+21 we compared **jitter in the main pulse and interpulse** and found them largely consistent.
- We do not expect jitter to change with time, but tested this in two of our best pulsars. Slight variations in J1909−3744 are likely due to radio-frequency interference; if so, **its intrinsic jitter may be lower, and the pulsar even more precise than we can currently measure**.

## Future prospects for noise modeling

{% include figure.html side="left" src="/assets/papers/jitter-12p5/spectrum.png" alt="Noise spectrum for PSR J1713+0747" caption="Noise spectrum for PSR J1713+0747, summarizing physical effects studied in NANOGrav pulsars, including jitter. Courtesy J. Cordes." %}

- As larger telescopes come online, jitter, not receiver noise, becomes the dominant TOA uncertainty. A bigger dish or a wider-band receiver does not reduce it; **only observing longer does**. Splitting arrays into sub-arrays may help in some cases.
- Because jitter is so dominant, it matters for the design of new telescopes, including **concepts for a dedicated pulsar timing array telescope**.
- Within the **International Pulsar Timing Array**, telescopes could split the work: some observing jitter-dominated pulsars while the most sensitive focus on weaker ones.
- As with LIGO, we must understand every source of noise and build a **noise budget** to make a believable detection of gravitational waves.

Questions about this paper? Contact the corresponding author, {% include email.html text=site.title %}.
