---
title: The Dispersive Time Delay in a Cold Plasma
date: 2026-10-05
summary: Deriving the cold-plasma dispersion relation from Maxwell's equations, and from it the dispersive delay.
# pdf: /assets/files/plasma.pdf   # uncomment to link a PDF version
---
Here we derive the dispersion relation for radio waves in a cold, ionized medium, and from it the dispersive time delay.

## Electromagnetic propagation through a cold plasma

We consider the oscillation of cold (the electron thermal speeds are negligible), free electrons in a propagating electric field. For a single electron, we have

$$
m_e \ddot{\mathbf{r}} = e\mathbf{E}.
$$

The current density is

$$
\mathbf{J} = \rho\mathbf{v} = n_e e \dot{\mathbf{r}}
$$

and its time derivative is

$$
\frac{\partial\mathbf{J}}{\partial t} = \frac{\partial}{\partial t} \left(n_e e \dot{\mathbf{r}}\right) = n_e e \ddot{\mathbf{r}} = n_e e \left(\frac{e\mathbf{E}}{m_e}\right) = \frac{n_e e^2}{m_e}\mathbf{E}.
$$

Let's now assume we have a plane wave propagating in the $$z$$-direction, linearly polarized along $$x$$. Therefore, we can write the electric field as

$$
\mathbf{E} = E_0 \exp\left[i(kz-\omega t)\right] \hat{\mathbf{x}}.
$$

This equation satisfies the wave equation, so it will be useful later to determine the two quantities:

$$
\begin{aligned}
\nabla^2\mathbf{E} &= \frac{\partial^2}{\partial z^2} E_0 \exp\left[i(kz-\omega t)\right] \hat{\mathbf{x}} = -k^2 E_0 \exp\left[i(kz-\omega t)\right] \hat{\mathbf{x}} = -k^2 \mathbf{E} \\
\frac{\partial^2\mathbf{E}}{\partial t^2} &= \frac{\partial^2}{\partial t^2} E_0 \exp\left[i(kz-\omega t)\right] \hat{\mathbf{x}} = -\omega^2 E_0 \exp\left[i(kz-\omega t)\right] \hat{\mathbf{x}} = -\omega^2 \mathbf{E}.
\end{aligned}
$$

We will also use three of Maxwell's equations in Gaussian (cgs) units:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= 4\pi\rho \\
\nabla \times \mathbf{E} &= -\frac{1}{c}\frac{\partial\mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \frac{1}{c}\left(4\pi\mathbf{J} + \frac{\partial\mathbf{E}}{\partial t}\right).
\end{aligned}
$$

We start by taking the curl of both sides of the second equation (Faraday's law) and then plug in values appropriately

$$
\begin{aligned}
\nabla \times \left(\nabla \times \mathbf{E}\right) &= \nabla \times \left(-\frac{1}{c}\frac{\partial\mathbf{B}}{\partial t}\right) \\
\rightarrow \nabla \left(\nabla \cdot \mathbf{E}\right) - \nabla^2 \mathbf{E} &= -\frac{1}{c}\frac{\partial}{\partial t}\left(\nabla \times \mathbf{B}\right) \\
\rightarrow \nabla \left(4\pi\rho\right) - \left(-k^2\mathbf{E}\right) &= -\frac{1}{c}\frac{\partial}{\partial t}\left[\frac{1}{c}\left(4\pi\mathbf{J} + \frac{\partial\mathbf{E}}{\partial t}\right)\right] \\
\rightarrow 4\pi\cancel{\nabla \rho} + k^2\mathbf{E} &= -\frac{4\pi}{c^2}\frac{\partial\mathbf{J}}{\partial t} - \frac{1}{c^2}\frac{\partial^2 \mathbf{E}}{\partial t^2} \\
\rightarrow k^2\mathbf{E} &= -\frac{4\pi}{c^2}\frac{n_e e^2}{m_e}\mathbf{E} + \frac{\omega^2}{c^2}\mathbf{E} \\
\implies k^2c^2 &= -\frac{4\pi n_e e^2}{m_e} + \omega^2.
\end{aligned}
$$

We can define the (angular) plasma frequency as

$$
\omega_p^2 \equiv \frac{4 \pi n_e e^2}{m_e}
$$

and therefore we arrive at the dispersion relation

$$
\omega^2 = k^2 c^2 + \omega_p^2.
$$

The plasma frequency is related to the electron density as

$$
\nu_p = \frac{\omega_p}{2\pi} = \sqrt{\frac{n_e e^2}{\pi m_e}} \approx 8.979~\mathrm{kHz}~\left(\frac{n_e}{\mathrm{cm^{-3}}}\right)^{1/2}.
$$

The propagation speed is given by the group velocity

$$
\begin{aligned}
v_g \equiv \frac{\partial\omega}{\partial k} &= \frac{\partial}{\partial k} \omega \\
&= \frac{\partial}{\partial k} \left(k^2 c^2 + \omega_p^2\right)^{1/2} \\
&= \frac{\cancel{2}kc^2}{\cancel{2}\left(k^2 c^2 + \omega_p^2\right)^{1/2}} \\
&= \frac{\cancel{\frac{1}{c}}\left(\omega^2 - \omega_p^2\right)^{1/2} c^{\cancel{2}}}{\omega} \\
&= c \left(1 - \frac{\omega_p^2}{\omega^2}\right)^{1/2} \\
&= c \left(1 - \frac{\nu_p^2}{\nu^2}\right)^{1/2} \\
&\equiv c\mu,
\end{aligned}
$$

where $$\mu \le 1$$ is the index of refraction. Below the plasma frequency, $$\mu$$ is imaginary and the waves cannot propagate. For the ionosphere, the electron density peaks at about $$10^6~\mathrm{cm}^{-3}$$ and so the plasma frequency is about 9 MHz. In the ISM, for $$n_e \sim 0.1~\mathrm{cm}^{-3}$$, the plasma frequency is about 3 kHz.

## Dispersive time delay

The total propagation time as a function of path length through the medium is

$$
\begin{aligned}
t_\mathrm{total} &= \int_0^D \frac{dl}{v_g} \\
&= \int_0^D \frac{dl}{c}\left(1-\frac{\nu_p^2}{\nu^2}\right)^{-1/2} \\
&\approx \int_0^D \frac{dl}{c}\left(1+\frac{\nu_p^2}{2\nu^2}\right) \\
&= \int_0^D \frac{dl}{c} + \int_0^D \frac{dl}{c}\frac{\nu_p^2}{2\nu^2} \\
&= \frac{D}{c} + \frac{e^2}{2\pi m_e c}\frac{\int_0^D n_e(l)\,dl}{\nu^2} \\
&= t_\mathrm{geometric} + t_\mathrm{dispersive},
\end{aligned}
$$

where in the last step we break up the total time into the geometric travel time and the dispersive delay. Therefore,

$$
\begin{aligned}
t_\mathrm{delay} &= \frac{e^2}{2\pi m_e c}\frac{\int_0^D n_e(l)\,dl}{\nu^2} \\
&\equiv K\frac{\mathrm{DM}}{\nu^2} \\
&\approx 4.149~\mathrm{ms}~\left(\frac{\mathrm{DM}}{\mathrm{pc~cm^{-3}}}\right)\left(\frac{\nu}{\mathrm{GHz}}\right)^{-2},
\end{aligned}
$$

where $$\mathrm{DM} \equiv \int_0^D n_e(l)\,dl$$ is the dispersion measure and $$K \equiv e^2/(2\pi m_e c) \approx 4.149~\mathrm{ms~GHz^2~pc^{-1}~cm^3}$$ is the dispersion constant.
