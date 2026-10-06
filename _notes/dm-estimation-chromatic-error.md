---
title: Dispersion Measure Estimation with Additional Chromatic Errors
date: 2025-11-10
summary: How measurement errors and chromatic timing perturbations propagate into two-frequency DM estimates and infinite-frequency arrival times.
# pdf: /assets/files/DM_estimation_chromatic_error.pdf   # uncomment to link a PDF version
---
Here we calculate DM estimation errors given multiple timing perturbations.

## Two-frequency timing perturbations

The time of arrival (TOA) at a particular frequency $$\nu$$ is given as the infinite-frequency arrival time plus the dispersive delay. We will also include measurement errors $$\epsilon_\nu$$ and a chromatic (frequency-dependent) timing perturbation $$t_C$$, such that

$$
t_\nu = t_\infty + \frac{K\mathrm{DM}}{\nu^2} + t_{C,\nu} + \epsilon_\nu.
$$

Here, $$K \approx 4.149~\mathrm{ms~GHz^2~pc^{-1}~cm^{3}} = 4.149 \times 10^3~\mu\mathrm{s~GHz^2~pc^{-1}~cm^{3}} = 4.149 \times 10^9~\mu\mathrm{s~MHz^2~pc^{-1}~cm^{3}}$$ is the dispersion constant. We estimate the DM by taking TOAs at two frequencies $$\nu$$ and $$\nu'$$ and calculating

$$
\widehat{\mathrm{DM}} = \frac{t_{\nu'} - t_{\nu}}{K(\nu'^{-2} - \nu^{-2})}.
$$

The estimated infinite-frequency arrival time can then be written in one of two ways as

$$
\begin{aligned}
\hat{t}_\infty = t_\nu - \frac{K\widehat{\mathrm{DM}}}{\nu^2} &= t_\infty + \frac{K(\mathrm{DM}-\widehat{\mathrm{DM}})}{\nu^2} + t_{C,\nu} + \epsilon_\nu \\
&= t_\infty + \frac{K(\mathrm{DM}-\widehat{\mathrm{DM}})}{\nu'^2} + t_{C,\nu'} + \epsilon_{\nu'}.
\end{aligned}
$$

First we will solve for the DM difference. Substituting the measured TOAs into the equation for $$\widehat{\mathrm{DM}}$$ and subtracting from the true DM, we have

$$
\begin{aligned}
\delta\mathrm{DM} \equiv \mathrm{DM} - \widehat{\mathrm{DM}} &= \mathrm{DM} - \frac{t_{\nu'} - t_{\nu}}{K(\nu'^{-2} - \nu^{-2})} \\
&= \mathrm{DM} - \left[\frac{\left(\cancel{t_\infty} + \frac{K\mathrm{DM}}{\nu'^2} + t_{C,\nu'} + \epsilon_{\nu'}\right) - \left(\cancel{t_\infty} + \frac{K\mathrm{DM}}{\nu^2} + t_{C,\nu} + \epsilon_\nu\right)}{K(\nu'^{-2} - \nu^{-2})}\right] \\
&= \bcancel{\mathrm{DM}} - \left[\frac{\cancel{K}\bcancel{\mathrm{DM}}\cancel{(\nu'^{-2} - \nu^{-2})}}{\cancel{K}\cancel{(\nu'^{-2} - \nu^{-2})}} + \frac{t_{C,\nu'} + \epsilon_{\nu'} - t_{C,\nu} - \epsilon_\nu}{K(\nu'^{-2} - \nu^{-2})}\right] \\
&= -\frac{t_{C,\nu'} - t_{C,\nu} + \epsilon_{\nu'} - \epsilon_\nu}{K(\nu'^{-2} - \nu^{-2})}.
\end{aligned}
$$

The TOA perturbation will be (defining $$r \equiv \nu/\nu'$$, with $$\nu > \nu'$$):

$$
\begin{aligned}
\delta t_\infty \equiv t_\infty - \hat{t}_\infty &= -\frac{K(\mathrm{DM}-\widehat{\mathrm{DM}})}{\nu^2} - t_{C,\nu} - \epsilon_\nu \\
&= -t_{C,\nu} - \epsilon_\nu - \frac{\cancel{K}}{\nu^2}\left[-\frac{t_{C,\nu'} - t_{C,\nu} + \epsilon_{\nu'} - \epsilon_\nu}{\cancel{K}(\nu'^{-2} - \nu^{-2})}\right] \\
&= -t_{C,\nu} - \epsilon_\nu + \left[\frac{t_{C,\nu'} - t_{C,\nu} + \epsilon_{\nu'} - \epsilon_\nu}{r^2 - 1}\right] \\
&= \frac{-(t_{C,\nu} + \epsilon_\nu)(r^2 - 1) + (t_{C,\nu'} - t_{C,\nu} + \epsilon_{\nu'} - \epsilon_\nu)}{r^2 - 1} \\
&= \frac{-r^2 t_{C,\nu} + \cancel{t_{C,\nu}} - r^2 \epsilon_\nu + \cancel{\epsilon_\nu} + t_{C,\nu'} - \cancel{t_{C,\nu}} + \epsilon_{\nu'} - \cancel{\epsilon_\nu}}{r^2 - 1} \\
&= \frac{-r^2 t_{C,\nu} - r^2 \epsilon_\nu + t_{C,\nu'} + \epsilon_{\nu'}}{r^2 - 1}.
\end{aligned}
$$

When the chromatic offsets are zero, we arrive at simply

$$
\delta t_\infty = \frac{\epsilon_{\nu'} - r^2 \epsilon_\nu}{r^2 - 1},
$$

which agrees with Eq. 21 in Cordes, Shannon & Stinebring (2016), assuming the frequency-dependent DM term is zero.

### The TOA uncertainty

The result above gives the offset, but one must also consider the TOA uncertainty, $$\sigma_{\delta t_\infty}$$, from the variance

$$
\sigma_{\delta t_\infty}^2 = \left\langle\delta t_\infty^2\right\rangle - \cancel{\left\langle\delta t_\infty\right\rangle^2} = \left\langle\delta t_\infty^2\right\rangle = \left\langle\left(\frac{\epsilon_{\nu'} - r^2 \epsilon_\nu}{r^2 - 1}\right)^2\right\rangle.
$$

Let $$X \sim \mathcal{N}(0,\sigma_{\epsilon_{\nu'}}^2)$$ and $$Y \sim \mathcal{N}(0,r^4 \sigma_{\epsilon_\nu}^2)$$. Then, $$X-Y \sim \mathcal{N}(0,\sigma_{\epsilon_{\nu'}}^2 + r^4 \sigma_{\epsilon_\nu}^2) \equiv \mathcal{N}(0,\sigma_\mathrm{diff}^2)$$. If we now define $$Z = (X-Y)^2$$, then $$Z \sim \sigma_\mathrm{diff}^2 \chi_1^2$$, where $$\chi_1^2$$ is the standard chi-squared distribution with one degree of freedom (see chi-squared proof notes). The mean of $$Z$$ is $$\langle Z\rangle = \sigma_\mathrm{diff}^2$$ and therefore

$$
\left\langle\delta t_\infty^2\right\rangle = \frac{\sigma_{\epsilon_{\nu'}}^2 + r^4 \sigma_{\epsilon_\nu}^2}{(r^2-1)^2}.
$$

If $$\sigma_{\epsilon_{\nu'}} = \sigma_{\epsilon_\nu}$$, then we have

$$
\sigma_{\delta t_\infty} = \sqrt{\left\langle\delta t_\infty^2\right\rangle} = \sigma_{\epsilon_\nu} \left(\frac{r^4 + 1}{r^4 - 2r^2 + 1}\right)^{1/2}.
$$
