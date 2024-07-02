# About

This is my graduation project at Hanoi University of Science and Technology. The project is about protecting CRN (cognitive radio network) from eavesdroppers, relates to physical layer security and wireless communication. The project name is **_"Cấp phát công suất phát cho các bên của mạng vô tuyến nhận thức trong điều kiện có kẻ nghe lén"_**.

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [About](#about)
- [Keywords and Fields](#keywords-and-fields)
- [Content](#content)
- [Simulation Guide](#simulation-guide)
- [References](#references)

<!-- /code_chunk_output -->

# Keywords and Fields

- _Physical Layer Security (**PLS**)_
  - _Average Information Leakage Rate (**AILR**)_
- _Cognitive Radio Network (**CRN**_)
  - _Underlay_/_Concurrent Spectrum Access (**CSA**)_
- _Optimization_
  - _Multiobjective Optimization Problem (**MOOP**)_
  - _Differential Evolution Algorithm (**DE**)_

# Content

I use Latex for writing my project content. See [content](content/) folder.

# Simulation Guide

I use Python for numerical simulation. See [src](src/) folder.

- `pip install -r requirements.txt`
- `python sims_*.py` for running simulations
  - `sims_feasibility`: generate data for experiments on $\rho$ and $R_b$ in transmission probability feasibility problem.
  - `sims_generate`: generate data for compare between propositions
    - run in order: feasibility -> noncoop: [PU and SU] -> selfish -> competitive
    - result file in previous step will be required for latter steps
    - data in result file of final step (competitive) will contains all data from previous step, so can use it for drawing
  - `sims_competitive`: generate data for experiments on $\theta^{(S)}$ in competitive problem.
    - require result of feasibility generated data.
- pass data files into `draw_*.ipynb` for running illustration
  - `draw_constraints`: draw feasibility region $G$
  - `draw_rl`: draw 3d graph of $R_L$ onto $p_P$ and $p_S$
  - `draw_feasibility`: draw transmission probability feasibility problem.
  - `draw_main_*`: draw comparation between propositions
    - `draw_main_general`: compare on all data
    - `draw_main_sameptx`: compare on same or similar $p_{tx}^{(P)}$ only.
    - `draw_main_channel`: compare on various channel conditions.
  - `draw_thetas`: draw competitive problem with various $\theta^{(S)}$.
  - `draw_multiuser`: draw competitive problem with multi SUs.
- [Optional] pass data file to `analyze_*` for concat many run-try-data and review probability characteristics of data.

# References

I have read some papers and write some JS code for noting their main content. Just open [references/index.html](references/index.html) to see the lists. Inside some papers, I also highlighted the interested content.
