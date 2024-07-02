// --------- This file contains data for rendering ---------

// An array of RAW data items. This can be convert to another representation by a Parser.
// Each item contain fields for displaying. Only fields defined as COLUMNS are rendered
// Special Fields:
//      - `_tags_`: Tags (for highlighting purpose)
DATA = [
  {
    cite: `@article{okati2017comparison,
    title={A comparison between different meta-heuristic techniques in power allocation for physical layer security},
    author={Okati, N and Mosavi, MR and Behroozi, H},
    journal={Iranian Journal of Electrical \& Electronic Engineering},
    volume={13},
    number={4},
    pages={311},
    year={2017}
  }`,
    url: "",
    link: "refs/okati2017.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> các thuật toán tối ưu metaheuristic trong các bài toán liên quan cấp phát công suất phát PLS</li>
      <li></li>
    </ul>`,
    _tags_: "design",
  },
  {
    cite: `@article{pradhan2014comparative,
      title={Comparative performance analysis of evolutionary algorithm based parameter optimization in cognitive radio engine: A survey},
      author={Pradhan, Pyari Mohan and Panda, Ganapati},
      journal={Ad Hoc Networks},
      volume={17},
      pages={129--146},
      year={2014},
      publisher={Elsevier}
    }`,
    url: "https://sci-hub.se/10.1016/j.adhoc.2014.01.010",
    link: "refs/pradhan2014.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> các thuật toán tối ưu tiến hóa trong các bài toán liên quan CRN</li>
      <li>Tham khảo tóm tắt về các thuật toán</li>
    </ul>`,
    _tags_: "design,crn",
  },
  {
    cite: ``,
    title: "Multicriteria Optimization",
    url: "https://cdn-2.pdfdrive.to/v1/files/b41dbaaa-952e-4d4a-8b04-27020e80db19/download?t=1flVmBGHBKJj06PjLT3id3rlURx0Ys50",
    link: "refs/Multicriteria Optimization.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "design",
  },
  {
    cite: ``,
    title: "Evolutionary Multiobjective Optimization: Past, Present and Future",
    url: "https://www.cs.cinvestav.mx/~EVOCINV/download/tutorial-moea.pdf",
    link: "refs/tutorial-moea.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "design",
  },
  {
    cite: ``,
    title:
      "Multi-Objective Optimization Using Evolutionary Algorithms: An Introduction",
    url: "https://www.egr.msu.edu/~kdeb/papers/k2011003.pdf",
    link: "refs/k2011003.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "design",
  },
  {
    cite: `@inproceedings{cervenka2018visual,
      title={Visual guide of f and cr parameters influence on differential evolution solution quality},
      author={Cervenka, M and Boudn{\'a}, H},
      booktitle={24th International Conference Engineering Mechanics},
      pages={141--144},
      year={2018}
    }`,
    url: "https://www.engmech.cz/improc/2018/141.pdf",
    link: "refs/de.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "design",
  },
  {
    cite: `@article{ouyang2017secrecy,
      title={Secrecy energy efficiency maximization in cognitive radio networks},
      author={Ouyang, Jian and Lin, Min and Zou, Yulong and Zhu, Wei-Ping and Massicotte, Daniel},
      journal={IEEE Access},
      volume={5},
      pages={2641--2650},
      year={2017},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/access.2017.2667882",
    link: "refs/ouyang2017.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "crn, design",
  },
  {
    cite: `@article{su2012active,
      title={Active cooperation between primary users and cognitive radio users in heterogeneous ad-hoc networks},
      author={Su, Weifeng and Matyjas, John D and Batalama, Stella},
      journal={IEEE Transactions on Signal Processing},
      volume={60},
      number={4},
      pages={1796--1805},
      year={2012},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/tsp.2011.2181841",
    link: "refs/su2012.pdf",
    description: `<ul>
      <li>Chiến lược hợp tác: 
      <br/>- Chia băng tần làm 2 phần: một phần truyền cho PU, một phần truyền cho SU
      <br/>- Trong phần băng tần truyền cho PU, chia khoảng thời gian làm 2 phần: một nửa PU phát và một nửa SU relay
      </li>
      <li>Thiết kế lựa chọn công suất phát trong các phần đảm bảo data rate bên SU và PU</li>
      <li>Có thể tham khảo các <b>lợi ích của việc hợp tác</b> và <b>đơn vị các đại lượng</b></li>
    </ul>`,
    _tags_: "crn,design,x,int",
  },
  {
    cite: `@article{zou2010adaptive,
      title={An adaptive cooperation diversity scheme with best-relay selection in cognitive radio networks},
      author={Zou, Yulong and Zhu, Jia and Zheng, Baoyu and Yao, Yu-Dong},
      journal={IEEE transactions on signal processing},
      volume={58},
      number={10},
      pages={5438--5445},
      year={2010},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "crn",
  },
  {
    cite: `@inproceedings{tashman2020physical,
      title={Physical-layer security for cognitive radio networks over cascaded Rayleigh fading channels},
      author={Tashman, Deemah H and Hamouda, Walaa},
      booktitle={GLOBECOM 2020-2020 IEEE Global Communications Conference},
      pages={1--6},
      year={2020},
      organization={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/globecom42002.2020.9348134",
    link: "refs/tashman2020.pdf",
    description: `<ul>
      <li>Chỉ có Eavs cho SU</li>
      <li>Cascaded Rayleigh trên kênh truyền STx-SRx và single Rayleigh trên các kênh truyền còn lại STx-PRx, STx-EAVS</li>
      <li>Tham khảo chiến lược mô phỏng: <b>Sử dụng distance để mô phỏng channel mean gain</b></li>
    </ul>`,
    _tags_: "crn,int",
  },
  {
    cite: `@article{lei2017secure,
      title={On secure underlay MIMO cognitive radio networks with energy harvesting and transmit antenna selection},
      author={Lei, Hongjiang and Xu, Ming and Ansari, Imran Shafique and Pan, Gaofeng and Qaraqe, Khalid A and Alouini, Mohamed-Slim},
      journal={IEEE Transactions on Green Communications and Networking},
      volume={1},
      number={2},
      pages={192--203},
      year={2017},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "crn,div",
  },
  {
    cite: `@article{nguyen2016joint,
      title={Joint information and jamming beamforming for secrecy rate maximization in cognitive radio networks},
      author={Nguyen, Van-Dinh and Duong, Trung Q and Dobre, Octavia A and Shin, Oh-Soon},
      journal={IEEE Transactions on Information Forensics and Security},
      volume={11},
      number={11},
      pages={2609--2623},
      year={2016},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "crn,div",
  },
  {
    cite: `@inproceedings{kalantari2014feasibility,
      title={Feasibility of positive secrecy rate in wiretap interference channels},
      author={Kalantari, Ashkan and Maleki, Sina and Zheng, Gan and Chatzinotas, Symeon and Ottersten, Bj{\"o}rn},
      booktitle={2014 IEEE Global Conference on Signal and Information Processing (GlobalSIP)},
      pages={1190--1194},
      year={2014},
      organization={IEEE}
    }`,
    url: "",
    link: "refs/.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "coop",
  },
  {
    cite: `@article{xie2015secure,
      title={Secure degrees of freedom of $ K $-user Gaussian interference channels: A unified view},
      author={Xie, Jianwei and Ulukus, Sennur},
      journal={IEEE Transactions on Information Theory},
      volume={61},
      number={5},
      pages={2647--2661},
      year={2015},
      publisher={IEEE}
    }`,
    url: "",
    link: "refs/.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "coop",
  },
  {
    cite: `@article{cumanan2017secure,
      title={Secure communications with cooperative jamming: Optimal power allocation and secrecy outage analysis},
      author={Cumanan, Kanapathippillai and Alexandropoulos, George C and Ding, Zhiguo and Karagiannidis, George K},
      journal={IEEE Transactions on Vehicular Technology},
      volume={66},
      number={8},
      pages={7495--7505},
      year={2017},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div",
  },
  {
    cite: `@article{zhou2010secure,
      title={Secure transmission with artificial noise over fading channels: Achievable rate and optimal power allocation},
      author={Zhou, Xiangyun and McKay, Matthew R},
      journal={IEEE Transactions on Vehicular Technology},
      volume={59},
      number={8},
      pages={3831--3842},
      year={2010},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div",
  },
  {
    cite: `@article{zhang2013design,
      title={On the design of artificial-noise-aided secure multi-antenna transmission in slow fading channels},
      author={Zhang, Xi and Zhou, Xiangyun and McKay, Matthew R},
      journal={IEEE Transactions on Vehicular Technology},
      volume={62},
      number={5},
      pages={2170--2181},
      year={2013},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div",
  },
  {
    cite: `@article{goel2008guaranteeing,
      title={Guaranteeing secrecy using artificial noise},
      author={Goel, Satashu and Negi, Rohit},
      journal={IEEE transactions on wireless communications},
      volume={7},
      number={6},
      pages={2180--2189},
      year={2008},
      publisher={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div",
  },
  {
    cite: `@ARTICLE{7544588,
      author={Li, Lingxiang and Petropulu, Athina P. and Chen, Zhi and Fang, Jun},
      journal={IEEE Journal of Selected Topics in Signal Processing}, 
      title={Improving Wireless Physical Layer Security via Exploiting Co-Channel Interference}, 
      year={2016},
      volume={10},
      number={8},
      pages={1433-1448},
      keywords={MIMO;Cooperative communication;Interference channels;Jamming;Physical layer;Network security;Physical-layer security;cooperative communications;multi-input multi-output;secrecy degrees of freedom (S.D.o.F)},
      doi={10.1109/JSTSP.2016.2600516}
    }`,
    url: "https://sci-hub.se/10.1109/jstsp.2016.2600516",
    link: "refs/li2016.pdf",
    description: `<ul>
      <li>Interference từ người dùng khác, MIMOME</li>
      <li>Cực đại SDoF</li>
    </ul>`,
    _tags_: "coop,design,x",
  },
  {
    cite: `@article{tang2014secrecy,
      title={Secrecy outage analysis of underlay cognitive radio unit over Nakagami-$ m $ fading channels},
      author={Tang, Chaoqing and Pan, Gaofeng and Li, Tingting},
      journal={IEEE Wireless Communications Letters},
      volume={3},
      number={6},
      pages={609--612},
      year={2014},
      publisher={IEEE}
    }`,
    url: "",
    link: "refs/tang2014.pdf",
    description: `<ul>
      <li>Kênh truyền <b>Nakagami-m</b> fading
        <br>m = 1 <==> Rayleigh
        <br>m = 0.5 <==> One-side Gaussian
      </li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@article{hoang2015cooperative,
      title={Cooperative beamforming and user selection for improving the security of relay-aided systems},
      author={Hoang, Tiep M and Duong, Trung Q and Suraweera, Himal A and Tellambura, Chintha and Poor, H Vincent},
      journal={IEEE Transactions on Communications},
      volume={63},
      number={12},
      pages={5039--5051},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/tcomm.2015.2494012",
    link: "refs/hoang2015.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "relay,div",
  },
  {
    cite: `@article{zou2014secrecy,
      title={Secrecy outage and diversity analysis of cognitive radio systems},
      author={Zou, Yulong and Li, Xuelong and Liang, Ying-Chang},
      journal={IEEE Journal on Selected Areas in Communications},
      volume={32},
      number={11},
      pages={2222--2236},
      year={2014},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/jsac.2014.141121",
    link: "refs/zou2014.pdf",
    description: `<ul>
      <li>Chỉ có Eavs cho SUs</li>
      <li>Các SUs quản lý tập trung (infrastructure-based), Các Eavs là hợp tác</li>
      <li>Lập lịch cho các SUs theo round-robin trong điều kiện Full CSI và chỉ có CSI của SRx tương ứng</li>
      <li>Cực đại <b>secrecy capacity, fading coefficients</b></li>
    </ul>`,
    _tags_: "crn,div,design,csi,x",
  },
  {
    cite: `@article{zou2013physical,
      title={Physical-layer security with multiuser scheduling in cognitive radio networks},
      author={Zou, Yulong and Wang, Xianbin and Shen, Weiming},
      journal={IEEE Transactions on Communications},
      volume={61},
      number={12},
      pages={5103--5113},
      year={2013},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/tcomm.2013.111213.130235",
    link: "refs/zou2013.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div,crn",
  },
  {
    cite: `@article{kim2015secure,
      title={Secure transmission for multiuser relay networks},
      author={Kim, Sung-Il and Kim, Il-Min and Heo, Jun},
      journal={IEEE Transactions on Wireless Communications},
      volume={14},
      number={7},
      pages={3724--3737},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/twc.2015.2410776",
    link: "refs/kim2015.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div,relay,",
  },
  {
    cite: `@article{zou2015improving,
      title={Improving physical-layer security in wireless communications using diversity techniques},
      author={Zou, Yulong and Zhu, Jia and Wang, Xianbin and Leung, Victor CM},
      journal={IEEE Network},
      volume={29},
      number={1},
      pages={42--48},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/mnet.2015.7018202",
    link: "refs/zou2015.pdf",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "div",
  },
  {
    cite: `@inproceedings{anand2008secrecy,
      title={On the secrecy capacity of fading cognitive wireless networks},
      author={Anand, Santhanakrishnan and Chandramouli, Rajarathnam},
      booktitle={2008 3rd International Conference on Cognitive Radio Oriented Wireless Networks and Communications (CrownCom 2008)},
      pages={1--5},
      year={2008},
      organization={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/crowncom.2008.4562470",
    link: "refs/anand2008.pdf",
    description: `<ul>
      <li><b>PER (Primary Exclusive Region)</b> - R0 (khoảng cách giữa PTx và PRx) lớn nhất đảm bảo SOP < \\beta  </li>
      <li>Kênh truyền: Rayleigh Fading + Log-normal Shadow + Path loss</li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@article{zhang2010dynamic,
      title={Dynamic resource allocation in cognitive radio networks},
      author={Zhang, Rui and Liang, Ying-Chang and Cui, Shuguang},
      journal={IEEE Signal Processing Magazine},
      volume={27},
      number={3},
      pages={102--114},
      year={2010},
      publisher={IEEE}
    }`,
    url: "https://arxiv.org/pdf/1001.3187",
    link: "refs/1001.3187v1.pdf",
    description: `<ul>
      <li>Kỹ thuật tối ưu phân bổ tài nguyên cho SU (<b>không xem xét PLS</b>)</li>
      <li>Mô hình phân tán PU và SU (không nằm chung một mạng) + Ràng buộc dựa trên <b>Interference Temperature - IT</b></li>
      <li>Xem xét hai mô hình: <b>Infrastructure</b> (Trao đổi qua BS: MAC & BC) và <b>Ad hoc</b> (SU trao đổi trực tiếp: IC)</li>
      <li>MIMO, Beamforming cho DRA (Dynamic resource allocation): <b>Đưa ra một số bài toán và hướng giải (chuyển về Convex Opt)</b></li>
    </ul>`,
    _tags_: "design,crn,x,int",
  },
  {
    cite: `@inproceedings{shu2011impact,
      title={Impact of interference on secrecy capacity in a cognitive radio network},
      author={Shu, Zhihui and Yang, Yaoqing and Qian, Yi and Hu, Rose Qingyang},
      booktitle={2011 IEEE Global Telecommunications Conference-GLOBECOM 2011},
      pages={1--6},
      year={2011},
      organization={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/glocom.2011.6133652",
    link: "refs/zhihuishu2011.pdf",
    description: `<ul>
      <li>Chỉ có Eav cho PUs</li>
      <li><b>Poisson Secure Communication Graph (s-graph)</b></li>
      <li>Ảnh hưởng của nhiễu xuyên từ <b>nhiều SUs</b></li>
      <li>Ảnh hưởng của phân phối vị trí (theo Poisson) của SU, PU, Eav lên SC</li>
      <li><b>Chiến lược mô phỏng</b></li>
    </ul>`,
    _tags_: "crn,int,x",
  },
  {
    cite: `@inproceedings{quach2017secrecy,
      title={Secrecy performance of cognitive cooperative industrial radio networks},
      author={Quach, Truong Xuan and Tran, Hung and Uhlemann, Elisabeth and Truc, Mai Tran},
      booktitle={2017 22nd IEEE International Conference on Emerging Technologies and Factory Automation (ETFA)},
      pages={1--8},
      year={2017},
      organization={IEEE}
    }`,
    url: "https://eprints.uet.vnu.edu.vn/eprints/id/eprint/3387/1/Secrecy%20Performance%20of%20Cognitive%20Cooperative.pdf",
    link: "refs/truong2017.pdf",
    description: `<ul>
      <li>Chỉ có Eav cho SU</li>
      <li><b>Multiple Relays</b> (decode-and-forward) selection</li>
      <li>Truyền theo 2 pha: [1] Truyền từ Tx tới các Relays và [2] Truyền từ 1 Relay được chọn tới Rx</li>
      <li>Xác định công suất truyền cho SU và Relay</li>
      </ul>`,
    _tags_: "crn,relay,x",
  },
  {
    cite: `@article{ahuja2024comprehensive,
      title={A comprehensive survey of security threats, detection, countermeasures, and future directions for physical and network layers in cognitive radio networks},
      author={Ahuja, Pooja and Sethi, Preeti and Chauhan, Naresh},
      journal={Multimedia Tools and Applications},
      volume={83},
      number={11},
      pages={32715--32738},
      year={2024},
      publisher={Springer}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li></li>
    </ul>`,
    _tags_: "crn",
  },
  {
    cite: `@inproceedings{sibomana2013non,
      title={On non-zero secrecy capacity and outage probability of cognitive radio networks},
      author={Sibomana, Louis and Tran, Hung and Zepernick, Hans-J{\"u}rgen and Kabiri, Charles},
      booktitle={2013 16th International Symposium on Wireless Personal Multimedia Communications (WPMC)},
      pages={1--6},
      year={2013},
      organization={IEEE}
    }`,
    url: "",
    link: "",
    description: `<ul>
      <li>Chỉ có Eav cho PUs</li>
      <li>Tự thích nghi Power cho SU</li>
    </ul>`,
    _tags_: "crn",
  },
  {
    cite: `@article{shu2013physical,
      title={On physical layer security for cognitive radio networks},
      author={Shu, Zhihui and Qian, Yi and Ci, Song},
      journal={IEEE Network},
      volume={27},
      number={3},
      pages={28--33},
      year={2013},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/mnet.2013.6523805",
    link: "refs/zhihuishu2013.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> các hình thức tấn công: PUE, OFA, LA, SSDF, Eavesdropping</li>
      <li>Chỉ có Eav cho PUs</li>
      <li>Mô hình kênh để phân tích SC và SOP của Primary</li>
      <li>Đánh giá trên <b>mật độ</b> PUs, SUs, Eves</li>
      <li>Có thể tham khảo chiến lược <b>Mô phỏng</b></li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@article{6290334,
      author={Attar, Alireza and Tang, Helen and Vasilakos, Athanasios V. and Yu, F. Richard and Leung, Victor C. M.},
      journal={Proceedings of the IEEE}, 
      title={A Survey of Security Challenges in Cognitive Radio Networks: Solutions and Future Research Directions}, 
      year={2012},
      volume={100},
      number={12},
      pages={3172-3186},
      keywords={Network security;Cognitive radio;Peer to peer computing;Telecommunication services;Signal to noise ratio;Research and development;Cognitive radio (CR);denial of service (DoS);incumbent emulation;security;spectrum sensing data falsification (SSDF)},
      doi={10.1109/JPROC.2012.2208211}
    }`,
    url: "https://sci-hub.se/10.1109/jproc.2012.2208211",
    link: "refs/attar2012.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> các hình thức tấn công: từ PLS đến CRN, chia theo <b>ad hoc CRN</b> đến <b>centralized CRN</b></li>
      <li>Tập trung nhiều vào các tấn công liên quan đến CRN nhiều hơn (SSDF)</li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@inproceedings{bouabdellah2018secrecy,
      title={Secrecy outage probability in cognitive radio networks subject to Rayleigh fading channels},
      author={Bouabdellah, Mounia and El Bouanani, Faissal and Ben-Azza, Hussain},
      booktitle={2018 International Conference on Advanced Communication Technologies and Networking (CommNet)},
      pages={1--5},
      year={2018},
      organization={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/commnet.2018.8360281",
    link: "refs/bouabdellah2018.pdf",
    description: `<ul>
      <li>Chỉ có Eavs cho SU</li>
      <li>SIMO</li>
      <li><b>Relay</b> có nhiều antennas nhận và 1 antenna phát</li>
      <li>Chỉ xem xét relay hỗ trợ SU</li>
      <li>Khi relay càng nhiều antennas nhận thì SOP càng giảm</li>
    </ul>`,
    _tags_: "crn,relay,int,x",
  },
  {
    cite: `@article{elkashlan2014security,
      title={On the security of cognitive radio networks},
      author={Elkashlan, Maged and Wang, Lifeng and Duong, Trung Q and Karagiannidis, George K and Nallanathan, Arumugam},
      journal={IEEE Transactions on Vehicular Technology},
      volume={64},
      number={8},
      pages={3790--3795},
      year={2014},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1145/1582379.1582447",
    link: "refs/zhang2009.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> các phương pháp phát hiện và phòng vệ (hơi sơ sài)</li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@article{sheng2018power,
      title={Power allocation for energy efficiency and secrecy of wireless interference networks},
      author={Sheng, Zhichao and Tuan, Hoang Duong and Nasir, Ali Arshad and Duong, Trung Q and Poor, H Vincent},
      journal={IEEE Transactions on Wireless Communications},
      volume={17},
      number={6},
      pages={3737--3751},
      year={2018},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/twc.2018.2815626",
    link: "refs/sheng2018.pdf",
    description: `<ul>
      <li>Multiuser interference network</li>
      <li>Tối ưu <b>Secrecy Throughput, Energy Efficiency</b> trên các điều kiện CSI khác nhau</li>
      <li>MultiTX, multiRX, Single Eav, SISOSE</li>
    </ul>`,
    _tags_: "csi,coop,design,x",
  },
  {
    cite: `@article{5783948,
      author={Liang, Ying-Chang and Chen, Kwang-Cheng and Li, Geoffrey Ye and Mahonen, Petri},
      journal={IEEE Transactions on Vehicular Technology}, 
      title={Cognitive radio networking and communications: an overview}, 
      year={2011},
      volume={60},
      number={7},
      pages={3386-3407},
      keywords={Sensors;Receivers;Radio transmitters;Interference;Signal to noise ratio;Cognitive radio (CR);cognitive radio networks (CRNs);dynamic resource management;dynamic spectrum access (DSA);spectrum sensing;spectrum sharing},
      doi={10.1109/TVT.2011.2158673}
    }`,
    url: "https://sci-hub.se/10.1109/tvt.2011.2158673",
    link: "refs/liang2011.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> chung về các kỹ thuật trong CRN</li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@misc{sibomana2014impact,
      title={Impact of Secondary User Communication on Security Communication of Primary User}, 
      author={Louis Sibomana and Hung Tran and Quang Anh Tran},
      year={2014},
      eprint={1408.6986},
      archivePrefix={arXiv},
      primaryClass={cs.CR}
}`,
    url: "https://arxiv.org/abs/1408.6986",
    link: "refs/1408.6986v1.pdf",
    description: `<ul>
      <li>Chỉ có Eav cho PUs</li>
      <li>SU có đầy đủ CSI, ngoại trừ CSI tới Eav</li>
      <li>Block Rayleigh Fading</li>
      <li>Metric: SOP cho PU, SEP cho SU, PNZC</li>
    </ul>`,
    _tags_: "crn,x",
  },
  {
    cite: `@article{zhang2015partner,
      title={Partner selection and incentive mechanism for physical layer security},
      author={Zhang, Ning and Cheng, Nan and Lu, Ning and Zhang, Xiang and Mark, Jon W and Shen, Xuemin},
      journal={IEEE Transactions on Wireless Communications},
      volume={14},
      number={8},
      pages={4265--4276},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/twc.2015.2418316",
    link: "refs/zhang2015.pdf",
    description: `<ul>
			<li>Multi Eavs</li>
      <>Lựa chọn relay và trả lợi ích (Stimulate Cooperative) => <b>Two-layered Game</b>: (1) Lựa chọn các helpers và (2) Các helpers lựa chọn công suất truyền (non-cooperative)
        <br>- (1) Sử dụng chiến lược tham lam: Chọn các helpers cho đến khi không còn cải thiện <b>secrecy rate</b>
        <br>- (2) Xây dựng <b>hàm lợi ích</b> và cực đại
      </li>
    </ul>`,
    _tags_: "design,relay,x",
  },
  {
    cite: `@inproceedings{ha2014physical,
      title={Physical layer secrecy performance over Rayleigh/Rician fading channels},
      author={Ha, Dac-Binh and Duong, Trung Q and Tran, Duc-Dung and Zepernick, Hans-J{\"u}rgen and Vu, Truong Tien},
      booktitle={2014 International Conference on Advanced Technologies for Communications (ATC 2014)},
      pages={113--118},
      year={2014},
      organization={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/atc.2014.7043367",
    link: "refs/ha2014.pdf",
    description: `<ul>
			<li>Kênh truyền fading bất đối xứng giữa Bob và Eve: Rayleigh/Rician và Rician/Rayleigh</li>
		</ul>`,
    _tags_: "x",
  },
  {
    cite: `@article{li2020securing,
      title={Securing transmissions by friendly jamming scheme in wireless networks},
      author={Li, Guangshun and Sheng, Xiaofei and Wu, Junhua and Yu, Haili},
      journal={Journal of Parallel and Distributed Computing},
      volume={144},
      pages={260--267},
      year={2020},
      publisher={Elsevier}
    }`,
    url: "https://sci-hub.se/10.1016/j.jpdc.2020.04.013",
    link: "refs/li2020.pdf",
    description: `<ul>
			<li>Các chiến lược sử dụng <b>Relay</b></li>
      <li>Có thể tham khảo chiến lược <b>Mô phỏng</b></li>
		</ul>`,
    _tags_: "relay,design,x",
  },
  {
    cite: `@article{dong2009improving,
      title={Improving wireless physical layer security via cooperating relays},
      author={Dong, Lun and Han, Zhu and Petropulu, Athina P and Poor, H Vincent},
      journal={IEEE transactions on signal processing},
      volume={58},
      number={3},
      pages={1875--1888},
      year={2009},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/tsp.2009.2038412",
    link: "refs/lundong2010.pdf",
    description: `<ul>
			<li>3 chiến lược sử dụng Relay: DF, AF và CJ</li>
      <li>Multi relays => Đánh trọng số + Xác định công suất phát</li>
      <li>Multi Eavs</li>
      <li>Tối ưu Secrecy Rate + Yêu cầu Full CSI</li>
		</ul>`,
    _tags_: "x,relay,design",
  },
  {
    cite: `@article{wang2018survey,
      title={A survey of optimization approaches for wireless physical layer security},
      author={Wang, Dong and Bai, Bo and Zhao, Wenbo and Han, Zhu},
      journal={IEEE Communications Surveys \& Tutorials},
      volume={21},
      number={2},
      pages={1878--1911},
      year={2018},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/comst.2018.2883144",
    link: "refs/wang2018.pdf",
    description: `<ul>
      <li>Tiếp cận PLS từ phương diện <b>thiết kế</b>: Optimization và Signal Processing</li>
      <li>Khảo sát các mô hình kênh Wiretap (phát biểu công thức tín hiệu nhận) theo MIMO: Conventional, Broadcast, MAC, IC, Relay</li>
      <li>Khảo sát các phương pháp tối ưu cho PLS: Các bài toán tối ưu thường là <b>Non convex</b> và chuyển về Convex Opt</li>
      <li>Nhóm các bài toán tối ưu trong PLS
        <br>- Secure Resource Allocation
        <br>- Secure Beamforming/Precoding (signal processing) và AN
        <br>- <b>Antenna, Node, Relay Selection/Scheduling</b>
        <br>- Kết hợp các kỹ thuật trên
      </li>
      <li>Một số độ đo
        <br>- Secrecy Rate/Capacity
        <br>- SOP
        <br>- Power Consumption
        <br>- Hiệu quả sử dụng năng lượng (EE)
      </li>
      <li>Các kỹ thuật xử lý và trích dẫn chia theo từng bài toán và từng độ đo</li>
      <li>Ảnh hưởng của CSI</li>
    </ul>`,
    _tags_: "design,csi,metric,x,fav",
  },
  {
    cite: `@article{aghdam2018overview,
      title={An overview of physical layer security with finite-alphabet signaling},
      author={Aghdam, Sina Rezaei and Nooraiepour, Alireza and Duman, Tolga M},
      journal={IEEE Communications Surveys \& Tutorials},
      volume={21},
      number={2},
      pages={1829--1850},
      year={2018},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/comst.2018.2880421",
    link: "refs/aghdam2018.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "input",
  },
  {
    cite: `@misc{raghavasecrecy,
      title={Secrecy Capacity of the Gaussian Wire-Tap Channel with Finite Complex Constellation Input},
      author={Raghava, GD and Rajan, BS},
      year={2010}
    }`,
    url: "https://arxiv.org/pdf/1010.1163",
    link: "refs/1010.1163v1.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "input",
  },
  {
    cite: `@incollection{cepheli2014physical,
      title={Physical layer security in wireless communication networks},
      author={Cepheli, Ozge and Kurt, Gunes Karabulut},
      booktitle={Security, Privacy, Trust, and Resource Management in Mobile and Wireless Communications},
      pages={61--81},
      year={2014},
      publisher={IGI Global}
    }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{lei2015physical,
      title={On physical layer security over generalized gamma fading channels},
      author={Lei, Hongjiang and Gao, Chao and Guo, Yongcai and Pan, Gaofeng},
      journal={IEEE Communications Letters},
      volume={19},
      number={7},
      pages={1257--1260},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/lcomm.2015.2426171",
    link: "refs/lei2015.pdf",
    description: `<ul>
			<li>SOP trong Generalized Gamma <b>fading channel</b></li>
		</ul>`,
    _tags_: "x",
  },
  {
    cite: `@inproceedings{lan2014enhancing,
        title={Enhancing secrecy in fading wiretap channels with only transmitter-side channel state information},
        author={Lan, Pang-Chang and Hong, Y-W Peter and Kuo, C-C Jay},
        booktitle={2014 IEEE Globecom Workshops (GC Wkshps)},
        pages={1314--1319},
        year={2014},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/glocomw.2014.7063615",
    link: "refs/lan2014.pdf",
    description: `<ul>
			<li><b>Reverse Training</b>=> Chỉ cần CSIT về Bob mà không quan trọng CSIRE</li>
		</ul>`,
    _tags_: "csi,x",
  },
  {
    cite: `@article{liu2015avoid,
      title={To avoid or not to avoid CSI leakage in physical layer secret communication systems},
      author={Liu, Ta-Yuan and Lin, Pin-Hsun and Lin, Shih-Chun and Hong, Y-W Peter and Jorswieck, Eduard Axel},
      journal={IEEE Communications Magazine},
      volume={53},
      number={12},
      pages={19--25},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/mcom.2015.7355561",
    link: "refs/liu2015.pdf",
    description: `<ul>
      <li>Một ví dụ về <b>Stochastic Binning</b></li>
      <li>Khảo sát các mức CSIT khác nhau (<b>MIMO, AN</b>): Perfect, Delayed (chỉ có thông tin trong quá khứ), Partial (phản hồi không chính xác) và Statistically (không có phản hồi)</li>
      <li><b>Reverse Training</b>(Bob -> Alice only) -> không đem lại lợi ích ước lượng kênh cho Eve</li>
    </ul>`,
    _tags_: "csi,x",
  },
  {
    cite: `@book{10.5555/3154546,
      author = {Wang, Li},
      title = {Physical Layer Security in Wireless Cooperative Networks},
      year = {2017},
      isbn = {3319618628},
      publisher = {Springer Publishing Company, Incorporated},
      edition = {1st},
      abstract = {This book provides a comprehensive overview for physical layer security in wireless cooperative networks, including fundamental concepts, typical solutions, and some recent achievements. It investigates the secrecy performance with respect to time reversal transmission and multi-antenna spatial modulation techniques. Both of which are proposed as effective physical layer processing schemes in wireless multipath channel environment. Resource allocation strategies to enhance secrecy performance in D2D communications are also discussed in this book. It contributes to formulating user social behaviors and utilizing social characteristics to improve the secrecy performance in wireless cooperative networks. This book not only analyzes the secrecy enhancement with certain techniques, but also pursues to find the relationships or tradeoffs among the secrecy performance, energy consumption, channel conditions, and other essential factors in wireless communications. This book targets researchers and professionals specializing in electronic engineering, computer science,wireless communications and networks. Advanced level students in electrical engineering and computer science will also find this book useful as a secondary text.}
      }`,
    url: "https://pdfdrive.to/filedownload/securing-wireless-communications-at-the-physical-layer-0",
    link: "refs/books-wang2017.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@book{cover2006elements,
      title={Elements of Information Theory},
      author={Cover, T.M. and Thomas, J.A.},
      isbn={9780471748816},
      lccn={2005047799},
      series={A Wiley-Interscience publication},
      url={https://books.google.com.vn/books?id=0QuawYmc2pIC},
      year={2006},
      publisher={Wiley}
    }`,
    url: "http://staff.ustc.edu.cn/~cgong821/Wiley.Interscience.Elements.of.Information.Theory.Jul.2006.eBook-DDU.pdf",
    link: "refs/books-cover2006.pdf",
    description: `<b>Information Theory</b>: Entropy, Stochastic Process, Capacity, Channels, Coding<br>
                         <b>Network Information Theory</b>: MAC, BC,...`,
    _tags_: "",
  },
  {
    cite: `@book{zhou2013physical,
        title={Physical Layer Security in Wireless Communications},
        author={Zhou, X. and Song, L. and Zhang, Y.},
        isbn={9781466567009},
        lccn={2013026468},
        series={Wireless Networks and Mobile Communications},
        url={https://books.google.com.vn/books?id=wjYTAgAAQBAJ},
        year={2013},
        publisher={Taylor \& Francis}
      }`,
    url: "https://pdfdrive.to/dl/physical-layer-security-in-wireless-communications-0",
    link: "refs/books-zhou2013.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{alves2016enhanced,
      title={Enhanced transmit antenna selection scheme for secure throughput maximization without CSI at the transmitter},
      author={Alves, Hirley and Tom{\'e}, Mauricio De Castro and Nardelli, Pedro Henrique Juliano and De Lima, Carlos HM and Latva-Aho, Matti},
      journal={IEEE Access},
      volume={4},
      pages={4861--4873},
      year={2016},
      publisher={IEEE}
    }`,
    url: "https://arxiv.org/pdf/1511.06518",
    link: "refs/1511.06518v1.pdf",
    description: `<ul>
			<li>MIMOME + <b>Antennas selection</b> (on-off mức anten)</li>
      <li>Xác định Rs để cực đại thông lượng (Rs * ptx), đảm bảo ràng buộc về ASOP và ptx </li>
      <li>Công thức <b>Trade-off giữa reliabilty và secrecy</b>: min_sop^(gamma_B / gamma_E) > max_ptx</li>
      <li>Liên quan mật thiết với <b>zhou2011</b></li>
		</ul>`,
    _tags_: "csi,asop,div,x",
  },
  {
    cite: `@article{zhao2019secrecy,
      title={Secrecy outage analysis over fluctuating two-ray fading channels},
      author={Zhao, Hui and Yang, Liang and Pan, Gaofeng and Alouini, Mohamed-Slim},
      journal={Electronics Letters},
      volume={55},
      number={15},
      pages={866--868},
      year={2019},
      publisher={Wiley Online Library}
    }`,
    url: "https://sci-hub.se/10.1049/el.2019.1104",
    link: "refs/zhao2019.pdf",
    description: `<ul>
			<li>ASOP cho Fluctuating Two-ray Fading channel</li>
		</ul>`,
    _tags_: "asop,x",
  },
  {
    cite: `@article{yadav2021comprehensive,
                title={A comprehensive survey of physical layer security over fading channels: Classifications, applications, and challenges},
                author={Yadav, Poonam and Kumar, Sandeep and Kumar, Rajesh},
                journal={Transactions on Emerging Telecommunications Technologies},
                volume={32},
                number={9},
                pages={e4270},
                year={2021},
                publisher={Wiley Online Library}
              }`,
    url: "https://sci-hub.se/10.1002/ett.4270",
    link: "refs/yadav2021.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> PLS về CSI, Metrics, Finite Coding</li>
      <li><b>Phân loại</b> PLS theo
        <br/>- <b>Fading</b>: <i>Multipath</i> (Rayleigh, Nakagami-m, a-u,n-u,...); <i>Shadowing</i> (Gamma, LN, IG,...); <i>Composite</i>
        <br/>- <b>ED</b>: Passive, Active
        <br/>- <b>Diversity</b>: MIMO, Cooperative
        <br/>- <b>Ứng dụng</b>: V2V, D2D,...
      </li>
      <li><b>Bài toán tối ưu</b>
        <br/>- <b>Cấp phát tài nguyên</b>
        <br/>- <b>Beamforming và Precoding</b>
        <br/>- <b>Node selection và Cooperation</b>:
      </li>
      </ul>`,
    _tags_: "csi,metric,fav,x",
  },
  {
    cite: `@article{badarneh2020achievable,
            title={Achievable physical-layer security over composite fading channels},
            author={Badarneh, Osamah S and Sofotasios, Paschalis C and Muhaidat, Sami and Cotton, Simon L and Rabie, Khaled M and Aldhahir, Naofal},
            journal={IEEE Access},
            volume={8},
            pages={195772--195787},
            year={2020},
            publisher={IEEE}
          }`,
    url: "https://sci-hub.se/10.1109/access.2020.3033893",
    link: "refs/badarneh2020.pdf",
    description: `<ul>
			<li>Fisher-Snedecor Composite Fading channel</li>
		</ul>`,
    _tags_: "x",
  },
  {
    cite: `@article{tran2017cognitive,
        title={Cognitive radio network with secrecy and interference constraints},
        author={Tran, Hung and Kaddoum, Georges and Gagnon, Fran{\c{c}}ois and Sibomana, Louis},
        journal={Physical Communication},
        volume={22},
        pages={32--41},
        year={2017},
        publisher={Elsevier}
      }`,
    url: "https://sci-hub.se/10.1016/j.phycom.2016.12.001",
    link: "refs/tran2017.pdf",
    description: `<ul>
			<li>SIMOME + Eavs cho cả PU, SU</li>
      <li>Xác định công thức SOP trên <b>Rayleight Block Fading</b></li>
      <li>Xác định giới hạn trên và dưới cho công suất phát của SU đảm bảo reliability và secrecy của PU</li>
      <li>Chưa lựa chọn chiến lược truyền tối ưu cho secrecy của cả hai bên</li>
		</ul>`,
    _tags_: "crn,fav,x",
  },
  {
    cite: `@article{hyadi2016overview,
        title={An overview of physical layer security in wireless communication systems with CSIT uncertainty},
        author={Hyadi, Amal and Rezki, Zouheir and Alouini, Mohamed-Slim},
        journal={IEEE Access},
        volume={4},
        pages={6121--6132},
        year={2016},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/access.2016.2612585",
    link: "refs/hyadi2016.pdf",
    description: `<ul>
      <li><b>Khảo sát</b> các mức CSIT và các kỹ thuật xử lý</li>
      <li>Xem xét từng trường hợp Main CSIT không hoàn hảo:
        <br>- Do sai số ước lượng
        <br>- Do liên kết phản hồi bị giới hạn
        <br>- Do delay trong tín hiệu phản hồi
      </li>
      <li><b>Khi chỉ biết statistical CSIT của cả main và wiretap</b>: Mukherijee13, Lin16, Liang2014</li>
    </ul>`,
    _tags_: "csi,x",
  },
  {
    cite: `@article{lin2015fast,
      title={On the fast fading Gaussian wiretap channel with statistical channel state information at the transmitter},
      author={Lin, Pin-Hsun and Jorswieck, Eduard},
      journal={IEEE Transactions on Information Forensics and Security},
      volume={11},
      number={1},
      pages={46--58},
      year={2015},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/tifs.2015.2476464",
    link: "refs/lin2016.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "csi,x",
  },
  {
    cite: `@article{liang2013broadcast,
      title={A broadcast approach for fading wiretap channels},
      author={Liang, Yingbin and Lai, Lifeng and Poor, H Vincent and Shamai, Shlomo},
      journal={IEEE Transactions on Information Theory},
      volume={60},
      number={2},
      pages={842--858},
      year={2013},
      publisher={IEEE}
    }`,
    url: "https://sci-hub.se/10.1109/tit.2013.2293756",
    link: "refs/liang2014.pdf",
    description: `<ul>
      <li><b>Layered Broadcast Approach</b>: Mã hóa theo các layers, Không yêu cầu CSI 
      <li>Xem xét 3 trường hợp
        <br>- Main là Block Rayleigh fading, Wiretap là constant
        <br>- Main là constant, Wiretap là Block Rayleigh fading
        <br>- Cả hai là Block Rayleigh fading
      </li>
      <li>Secrecy Rate đạt được trong 2 > 3 > 1</li>
    </ul>`,
    _tags_: "csi,x",
  },
  {
    link: "refs/he2016.pdf",
    cite: `@article{he2016secrecy,
        title={On secrecy metrics for physical layer security over quasi-static fading channels},
        author={He, Biao and Zhou, Xiangyun and Swindlehurst, A Lee},
        journal={IEEE Transactions on Wireless Communications},
        volume={15},
        number={10},
        pages={6913--6924},
        year={2016},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/twc.2016.2593445",
    description: `<ul>
      <li>3 metrics dựa trên Fractional Equivocation</li>
      <li>Đánh giá hệ thống Fading theo 3 metrics mới với các điều kiện CSI khác nhau</li>
      <li><b>Chất lượng kênh truyền</b> có vai trò quan trọng trong việc cải thiện hiệu quả an toàn của hệ thống</li>
      <li>Ngay cả khi sử dụng chiến lược mã hóa thông thường (Rs -> Rb), lượng tin bị lộ cũng không phải là toàn bộ</li>
      <li><b>Thiết kế tối ưu Rb, Rs với ràng buộc về throughput (pt * Rs)</b>
      <br>Xác định <b>feasible constraint cho throughput</b>
      </li>
    </ul>`,
    _tags_: "gsop,design,x,fav",
  },
  {
    cite: `@article{al2016enhancing,
        title={Enhancing secrecy rate in cognitive radio networks via stackelberg game},
        author={Al-Talabani, Ali and Deng, Yansha and Nallanathan, Arumugam and Nguyen, Huan X},
        journal={IEEE Transactions on Communications},
        volume={64},
        number={11},
        pages={4764--4775},
        year={2016},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{zou2015securing,
        title={Securing physical-layer communications for cognitive radio networks},
        author={Zou, Yulong and Zhu, Jia and Yang, Liuqing and Liang, Ying-Chang and Yao, Yu-dong},
        journal={IEEE Communications Magazine},
        volume={53},
        number={9},
        pages={48--54},
        year={2015},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: "Sensing Based Technique",
    _tags_: "",
  },
  {
    cite: `@article{tang2011interference,
        title={Interference assisted secret communication},
        author={Tang, Xiaojun and Liu, Ruoheng and Spasojevi{\'c}, Predrag and Poor, H Vincent},
        journal={IEEE Transactions on Information Theory},
        volume={57},
        number={5},
        pages={3153--3167},
        year={2011},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/tit.2011.2121450",
    link: "refs/tang2011.pdf",
    description: `<ul>
      <li>SR region cho Kênh truyền DMC => Xem xét cụ thể kênh Interference + Gaussian + Fading</li>
      <li>Tuy nhiên chỉ xem xét TH chỉ có 1 bên cần truyền thông tin</li>
      <li>Xác định Upper Bound cho Secrecy Rate</li>
      <li>Chiến lược cấp phát Power cho các bên để đạt được Secrecy Rate</li>
    </ul>`,
    _tags_: "coop,fav,x",
  },
  {
    cite: `@article{wu2011information,
        title={An information secrecy game in cognitive radio networks},
        author={Wu, Yongle and Liu, KJ Ray},
        journal={IEEE Transactions on Information Forensics and Security},
        volume={6},
        number={3},
        pages={831--842},
        year={2011},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/tifs.2011.2144585",
    link: "refs/yonglewu2011.pdf",
    description: `<ul>
      <li>Chỉ có Eavs cho PUs</li>
      <li>Tương tự Tang2011 nhưng xem xét SU truyền tin riêng (có cấu trúc)</li>
      <li><b>Cooperative Game Theory</b> giữa PU và SU (Stackelberg Game)</li>
      <li>Tối ưu secrecy rate theo công suất truyền</li>
      <li>Yêu cầu Perfect CSI</li>
      <li>Tham khảo chiến lược <b>mô phỏng</b></li>
    </ul>`,
    _tags_: "x,crn,design,fav",
  },
  {
    cite: `@inproceedings{barros2006secrecy,
        title={Secrecy capacity of wireless channels},
        author={Barros, Joao and Rodrigues, Miguel RD},
        booktitle={2006 IEEE international symposium on information theory},
        pages={356--360},
        year={2006},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/isit.2006.261613",
    link: "refs/barros2006.pdf",
    description: `<ul>
    <li>Xem xét secrecy với kênh <b>Quasi-static Fading</b></li>
    <li>Đánh giá kênh dựa trên SOP</li>
    </ul>`,
    _tags_: "x,fav",
  },
  {
    cite: `@article{zhou2011,
      author={Zhou, Xiangyun and McKay, Matthew R. and Maham, Behrouz and Hjørungnes, Are},
      journal={IEEE Communications Letters}, 
      title={Rethinking the Secrecy Outage Formulation: A Secure Transmission Design Perspective}, 
      year={2011},
      volume={15},
      number={3},
      pages={302-304},
      keywords={Security;Throughput;Signal to noise ratio;Quality of service;Fading;Delay;Channel capacity;Information-theoretic security;secrecy outage probability;channel state information},
      doi={10.1109/LCOMM.2011.011811.102433}}
    `,
    url: "https://sci-hub.se/10.1109/lcomm.2011.011811.102433",
    link: "refs/zhou2011.pdf",
    description: `<ul>
      <li>Metric ASOP xác định SOP dựa trên điều kiện truyền thực tế</li>
      <li>Hai chiến lược <b>On-Off</b> nhằm tối ưu throughput (xác suất truyền * Rs) với metric mới
        <br>- Khi biết CSI của Bob => Phản hồi CSI, off khi $gamma_B < mui$, với $mui$ được coi như <b>trade-off</b> giữa QoS (reliability) và secrecy
        <br>- Khi không có, chỉ cần truyền 1 bit đảm bảo Cb >= Rb
      </li>
    </ul>`,
    _tags_: "asop,design,x",
  },
  {
    cite: `@article{he2013secure,
      title={Secure on-off transmission design with channel estimation errors},
      author={He, Biao and Zhou, Xiangyun},
      journal={IEEE Transactions on Information Forensics and Security},
      volume={8},
      number={12},
      pages={1923--1936},
      year={2013},
      publisher={IEEE}
    }`,
    url: "http://arxiv.org/abs/1304.6485",
    link: "refs/1304.6485v2.pdf",
    description: `<ul>
			<li>Imperfect CSI tại Bob và Eve</li>
      <li><b>On-off transmission</b>: Alice quyết định có truyền hay không dựa trên kết quả ước lượng từ Bob và Eve</li>
      <li>Tối ưu thông lượng (ptx*(1-sop)*Rs)</li>
    </ul>`,
    _tags_: "x,csi,design,asop",
  },
  {
    cite: `@article{he2013wireless,
        title={Wireless physical layer security with imperfect channel state information: A survey},
        author={He, Biao and Zhou, Xiangyun and Abhayapala, Thushara D},
        journal={arXiv preprint arXiv:1307.4146},
        year={2013}
      }`,
    url: "https://arxiv.org/pdf/1307.4146",
    link: "refs/1307.4146v2.pdf",
    description: `<ul>
      <li>Full CSI => Secrecy Capacity</li>
      <li>Imperfect CSI => Ergodic SC (delay tolerant) + OP based</li>
      <li>Một số kỹ thuật tăng Secrecy
        <br>- <b>On-off TX (single-anten)</b>: Yêu cầu CSIT trên main channel (Gopala08, Zhou11, Rezki14, He13)
        <br>- <b>Beamforming + AN (multi-anten)</b>
        <br>- <b>Relay</b>
        <br>- <b>CRN</b>: Có thể coi tín hiệu từ SU là AN cho PU. Refs: Kwon12,Pei11
      </li>
      <li>Một số vấn đề
      <br>- <b>Imperfect CSIR</b>: Các bài báo thường giả thiết Perfect CSIR (Bob và Eve)
      <br>- <b>Imperfect Eve's location knowledge</b>
      </li>
    </ul>`,
    _tags_: "csi,fav,x",
  },
  {
    cite: `@inproceedings{houjeij2013game,
        title={A game-theoretic view on the physical layer security of cognitive radio networks},
        author={Houjeij, Ali and Saad, Walid and Bas, Tamer and others},
        booktitle={2013 IEEE International Conference on Communications (ICC)},
        pages={2095--2099},
        year={2013},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/icc.2013.6654835",
    link: "refs/houjeij2013.pdf",
    description: `<ul>
      <li>Chỉ có Eavs cho SUs</li>
      <li><b>Noncooperative Game Theory</b> giữa các SUs và các Eavs</li>
      <li>Multi PUs, Multi SUs (Infrastructure-base: Chung 1 BS), 
      <li>SU chọn PU để cân đối giữa Interference (khi nhiều SUs cùng chọn 1 PU) + Secrecy Rate + Availability</li>
      <li>Eav chọn PU để cực tiểu secrecy rate của toàn mạng</li>
    </ul>`,
    _tags_: "x,crn,design",
  },
  {
    cite: `@inproceedings{rezki2011ergodic,
        title={On the ergodic secrecy capacity of the wiretap channel under imperfect main channel estimation},
        author={Rezki, Zouheir and Khisti, Ashish and Alouini, Mohamed-Slim},
        booktitle={2011 Conference Record of the Forty Fifth Asilomar Conference on Signals, Systems and Computers (ASILOMAR)},
        pages={952--957},
        year={2011},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/acssc.2011.6190151",
    link: "refs/rezki2011.pdf",
    description: `<ul>
      <li>Fast Fading + Imperfect Main CSIT, No Eve CSI + Ergodic SC</li>
      <li>Upper và Lower Bound cho Ergodic CS</li>
    </ul>`,
    _tags_: "x,csi",
  },
  {
    cite: `@article{gopala2008secrecy,
        title={On the secrecy capacity of fading channels},
        author={Gopala, Praveen Kumar and Lai, Lifeng and El Gamal, Hesham},
        journal={IEEE Transactions on Information Theory},
        volume={54},
        number={10},
        pages={4687--4698},
        year={2008},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/tit.2008.928990",
    link: "refs/gopala2006.pdf", // 2008
    description: `<ul>
      <li>Nhiều mức CSIT khác nhau + <b>Ergodic, Block, Slow Fading</b></li>
      <li>Ergodic Secrecy Capacity</li>
      <li>Chiến lược On-Off nhằm tối ưu Secrecy Rate</li>
    </ul>`,
    _tags_: "csi,design,x",
  },
  {
    cite: `@article{salahdine2020security,
        title={Security threats, detection, and countermeasures for physical layer in cognitive radio networks: A survey},
        author={Salahdine, Fatima and Kaabouch, Naima},
        journal={Physical Communication},
        volume={39},
        pages={101001},
        year={2020},
        publisher={Elsevier}
      }`,
    url: "https://sci-hub.se/10.1016/j.phycom.2020.101001",
    link: "refs/salahdine2020.pdf",
    description: `<ul>
			<li><b>Khảo sát</b> các hình thức tấn công vào CRN, phương pháp phát hiện và phòng vệ</li>
      <li>Mục 5 trang 9 nói về Eavesdropping</li>
		</ul>`,
    _tags_: "x,crn,fav",
  },
  {
    cite: `@article{yang2015adaptive,
        title={Adaptive power control algorithm in cognitive radio based on game theory},
        author={Yang, Guanglong and Li, Bin and Tan, Xuezhi and Wang, Xiao},
        journal={IET Communications},
        volume={9},
        number={15},
        pages={1807--1811},
        year={2015},
        publisher={Wiley Online Library}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{bloch2015error,
        title={Error-control coding for physical-layer secrecy},
        author={Bloch, Matthieu and Hayashi, Masahito and Thangaraj, Andrew},
        journal={Proceedings of the IEEE},
        volume={103},
        number={10},
        pages={1725--1746},
        year={2015},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{mukherjee2014principles,
        title={Principles of physical layer security in multiuser wireless networks: A survey},
        author={Mukherjee, Amitav and Fakoorian, S Ali A and Huang, Jing and Swindlehurst, A Lee},
        journal={IEEE Communications Surveys \& Tutorials},
        volume={16},
        number={3},
        pages={1550--1573},
        year={2014},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{hamamreh2018classifications,
        title={Classifications and applications of physical layer security techniques for confidentiality: A comprehensive survey},
        author={Hamamreh, Jehad M and Furqan, Haji M and Arslan, Huseyin},
        journal={IEEE Communications Surveys \& Tutorials},
        volume={21},
        number={2},
        pages={1773--1828},
        year={2018},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/comst.2018.2878035",
    link: "refs/hamamreh2018.pdf",
    description: `<ul>
			<li><b>Khảo sát</b> chi tiết các vấn đề về PLS
        <br>- Phân loại: Keyless và Key-based
        <br>- Độ đo:
        <br>- Kỹ thuật: Mã hóa, Tối ưu (power, modulation, equalization,...), AN, Relay,...
        <br>- Ứng dụng: mmWave, VLC, PLC, IoT, BAN, <b>CR [327->346, 409]</b>,...
      </li>
		</ul>`,
    _tags_: "design, metric,x,fav",
  },
  {
    cite: `@article{harrison2013coding,
        title={Coding for secrecy: An overview of error-control coding techniques for physical-layer security},
        author={Harrison, Willie K and Almeida, Joao and Bloch, Mattheiu R and McLaughlin, Steven W and Barros, Joao},
        journal={IEEE Signal Processing Magazine},
        volume={30},
        number={5},
        pages={41--50},
        year={2013},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "pls",
  },
  {
    cite: `@inproceedings{mukherjee2013fading,
        title={Fading wiretap channel with no CSI anywhere},
        author={Mukherjee, Pritam and Ulukus, Sennur},
        booktitle={2013 IEEE International Symposium on Information Theory},
        pages={1347--1351},
        year={2013},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/isit.2013.6620446",
    link: "refs/mukherjee2013.pdf",
    description: `<ul>
			<li>Fast Rayleigh fading (Coherent Time = 1 symbol duration) + No CSI (do fast fading)</li>
		</ul>`,
    _tags_: "csi,x",
  },
  {
    cite: `@article{junhui2013power,
        title={Power control algorithm of cognitive radio based on non-cooperative game theory},
        author={Junhui, Zhao and Tao, Yang and Yi, Gong and Jiao, Wang and Lei, Fu},
        journal={China Communications},
        volume={10},
        number={11},
        pages={143--154},
        year={2013},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@inproceedings{zhu2012secrecy,
        title={Secrecy capacity of correlated Rayleigh fading channels},
        author={Zhu, Jinxiao and Jiang, Xiaohong and Takahashi, Osamu and Shiratori, Norio},
        booktitle={2012 18th Asia-Pacific Conference on Communications (APCC)},
        pages={333--337},
        year={2012},
        organization={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@inproceedings{kwon2012secure,
        title={Secure MISO cognitive radio system with perfect and imperfect CSI},
        author={Kwon, Taesoo and Wong, Vincent WS and Schober, Robert},
        booktitle={2012 IEEE global communications conference (GLOBECOM)},
        pages={1236--1241},
        year={2012},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/glocom.2012.6503282",
    link: "refs/kwon2012.pdf",
    description: `<ul>
			<li>Chỉ có Eavs cho PUs</li>
      <li>1 PU, Multiple SUs, Multiple Eavs, MISO => <b>Beamforming</b> tránh ảnh hưởng SUs khác và PU</li>
      <li>Tối ưu Beamformer cho PU Secrecy Rate => Non-convex (Giải quyết qua chuỗi các bài tối ưu SDP)</li>
      <li>Kết quả thử nghiệm chỉ xem xét <b>feasible</b></li>
      <li>SUs không chỉ giúp hỗ trợ tăng secrecy rate cho PU mà còn đạt được reliability rate khác 0</li>
		</ul>`,
    _tags_: "crn,csi,design,x,int",
  },
  {
    cite: `@inproceedings{omidvar2011game,
        title={A game theoretic approach for power allocation in the downlink of cognitive radio networks},
        author={Omidvar, Naeimeh and Khalaj, Babak H},
        booktitle={2011 IEEE 16th International Workshop on Computer Aided Modeling and Design of Communication Links and Networks (CAMAD)},
        pages={158--162},
        year={2011},
        organization={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@book{bloch2011physical,
        title={Physical-Layer Security: From Information Theory to Security Engineering},
        author={Bloch, M. and Barros, J.},
        isbn={9781139496292},
        url={https://books.google.com.vn/books?id=ov5jYjrrNCIC},
        year={2011},
        publisher={Cambridge University Press}
      }
      `,
    url: "https://pdfdrive.to/filedownload/physical-layer-security-from-information-theory-to-security-engineering",
    link: "refs/books-bloch2011.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{wang2010game,
        title={Game theory for cognitive radio networks: An overview},
        author={Wang, Beibei and Wu, Yongle and Liu, KJ Ray},
        journal={Computer networks},
        volume={54},
        number={14},
        pages={2537--2561},
        year={2010},
        publisher={Elsevier}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{yuksel2011secure,
        title={A secure communication game with a relay helping the eavesdropper},
        author={Yuksel, Melda and Liu, Xi and Erkip, Elza},
        journal={IEEE Transactions on Information Forensics and Security},
        volume={6},
        number={3},
        pages={818--830},
        year={2011},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{larsson2009game,
        title={Game theory and the flat-fading Gaussian interference channel},
        author={Larsson, Erik G and Jorswieck, Eduard A and Lindblom, Johannes and Mochaourab, Rami},
        journal={IEEE signal processing magazine},
        volume={26},
        number={5},
        pages={18--27},
        year={2009},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{zhang2009peak,
        title={On peak versus average interference power constraints for protecting primary users in cognitive radio networks},
        author={Zhang, Rui},
        journal={IEEE Transactions on Wireless Communications},
        volume={8},
        number={4},
        pages={2112--2120},
        year={2009},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@inproceedings{han2009physical,
        title={Physical layer security game: How to date a girl with her boyfriend on the same table},
        author={Han, Zhu and Marina, Ninoslav and Debbah, M{\'e}rouane and Hjorungnes, Are},
        booktitle={2009 International Conference on Game Theory for Networks},
        pages={287--294},
        year={2009},
        organization={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{han2010physical,
        title={Physical layer security game: interaction between source, eavesdropper, and friendly jammer},
        author={Han, Zhu and Marina, Ninoslav and Debbah, M{\'e}rouane and Hj{\o}rungnes, Are},
        journal={EURASIP Journal on Wireless Communications and Networking},
        volume={2009},
        pages={1--10},
        year={2010},
        publisher={Springer}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@inproceedings{berry2008information,
        title={Information theoretic games on interference channels},
        author={Berry, Randall and Tse, David},
        booktitle={2008 IEEE International Symposium on Information Theory},
        pages={2518--2522},
        year={2008},
        organization={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{liang2009information,
        title={Information theoretic security},
        author={Liang, Yingbin and Poor, H Vincent and Shamai, Shlomo and others},
        journal={Foundations and Trends{\textregistered} in Communications and Information Theory},
        volume={5},
        number={4--5},
        pages={355--580},
        year={2009},
        publisher={Now Publishers, Inc.}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{bloch2021overview,
        title={An overview of information-theoretic security and privacy: Metrics, limits and applications},
        author={Bloch, Matthieu and G{\"u}nl{\"u}, Onur and Yener, Aylin and Oggier, Fr{\'e}d{\'e}rique and Poor, H Vincent and Sankar, Lalitha and Schaefer, Rafael F},
        journal={IEEE Journal on Selected Areas in Information Theory},
        volume={2},
        number={1},
        pages={5--22},
        year={2021},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/jsait.2021.3062755",
    link: "refs/bloch2021.pdf",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "x",
  },
  {
    cite: `@article{liang2008secure,
        title={Secure communication over fading channels},
        author={Liang, Yingbin and Poor, H Vincent and Shamai, Shlomo},
        journal={IEEE Transactions on Information Theory},
        volume={54},
        number={6},
        pages={2470--2492},
        year={2008},
        publisher={IEEE}
      }`,
    url: "https://arxiv.org/pdf/0708.2733",
    link: "refs/0708.2733v1.pdf",
    description: `<ul>
			<li>CSI hoàn hảo + Ergodic secrecy capacity</li>
      <li>Parallel wiretap channel -> Fading</li>
		</ul>`,
    _tags_: "x",
  },
  // {
  //   cite: `@article{bloch2008wireless,
  //       title={Wireless information-theoretic security},
  //       author={Bloch, Matthieu and Barros, Jo{\~a}o and Rodrigues, Miguel RD and McLaughlin, Steven W},
  //       journal={IEEE transactions on information theory},
  //       volume={54},
  //       number={6},
  //       pages={2515--2534},
  //       year={2008},
  //       publisher={IEEE}
  //     }`,
  //   url: "",
  //   link: "",
  //   description: `<ul>
  // 		<li></li>
  // 	</ul>`,
  //   _tags_: "",
  // },
  {
    cite: `@inproceedings{wang2007power,
        title={Power control for cognitive radio base on game theory},
        author={Wang, Xia and Zhu, Qi},
        booktitle={2007 International Conference on Wireless Communications, Networking and Mobile Computing},
        pages={1256--1259},
        year={2007},
        organization={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@inproceedings{parada2005secrecy,
        title={Secrecy capacity of SIMO and slow fading channels},
        author={Parada, Patricio and Blahut, Richard},
        booktitle={Proceedings. International Symposium on Information Theory, 2005. ISIT 2005.},
        pages={2152--2155},
        year={2005},
        organization={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{pei2011secure,
        title={Secure communication in multiantenna cognitive radio networks with imperfect channel state information},
        author={Pei, Yiyang and Liang, Ying-Chang and Teh, Kah Chan and Li, Kwok Hung},
        journal={IEEE Transactions on Signal Processing},
        volume={59},
        number={4},
        pages={1683--1693},
        year={2011},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/tsp.2011.2105479",
    link: "refs/pei2011.pdf",
    description: `<ul>
			<li>Chỉ có Eavs cho SUs</li>
      <li>Partial CSI + <b>Maximize Rate</b> => Quasi-convex</li>
		</ul>`,
    _tags_: "csi,crn,design,x",
  },
  {
    cite: `@article{ruan2015generalized,
        title={Generalized interference alignment—Part II: Application to wireless secrecy},
        author={Ruan, Liangzhong and Lau, Vincent KN and Win, Moe Z},
        journal={IEEE Transactions on Signal Processing},
        volume={64},
        number={10},
        pages={2688--2701},
        year={2015},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{gabry2013optimization,
        title={On the optimization of the secondary transmitter's strategy in cognitive radio channels with secrecy},
        author={Gabry, Frederic and Li, Nan and Schrammar, Nicolas and Girnyk, Maksym and Rasmussen, Lars K and Skoglund, Mikael},
        journal={IEEE Journal on Selected Areas in Communications},
        volume={32},
        number={3},
        pages={451--463},
        year={2013},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{xu2013general,
        title={A general framework of wiretap channel with helping interference and state information},
        author={Xu, Peng and Ding, Zhiguo and Dai, Xuchu and Leung, Kin K},
        journal={IEEE transactions on information forensics and security},
        volume={9},
        number={2},
        pages={182--195},
        year={2013},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{jeon2014secure,
        title={Secure communications with untrusted secondary nodes in cognitive radio networks},
        author={Jeon, Hyoungsuk and McLaughlin, Steven W and Kim, Il-Min and Ha, Jeongseok},
        journal={IEEE Transactions on Wireless Communications},
        volume={13},
        number={4},
        pages={1790--1805},
        year={2014},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{kalantari2015joint,
        title={Joint power control in wiretap interference channels},
        author={Kalantari, Ashkan and Maleki, Sina and Zheng, Gan and Chatzinotas, Symeon and Ottersten, Bj{\"o}rn},
        journal={IEEE Transactions on Wireless Communications},
        volume={14},
        number={7},
        pages={3810--3823},
        year={2015},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/twc.2015.2412531",
    link: "refs/kalantari2015.pdf",
    description: `<ul>
			<li>Interference + SISOSE</li>
      <li>Chỉ xem xét secrecy cho 1 user: Dữ liệu từ <b>ZigBee</b> không cần thiết phải bảo mật</li>
      <li>Tham khảo các <b>trích dẫn nghiên cứu về Interference</b></li>
      <li>Cần có một bên thực hiện tính toán để xác định công suất cho 2 bên:
        <br>- Sử dụng một center: Tốn thời gian và lượt truyền
        <br>- <b>Gửi cho bên còn lại</b>
      </li>
      <li>Tối ưu Rs theo PP và PS</li>
      <li>Tham khảo cách <b>giải bài toán tối ưu 2 biến</b>: Cố định một biến</li>
		</ul>`,
    _tags_: "design,coop,int,x,fav",
  },
  {
    cite: `@inproceedings{huang2018secure,
        title={On secure transmission design: An information leakage perspective},
        author={Huang, Yong and Wang, Wei and He, Biao and Sun, Liang and Jiang, Tao},
        booktitle={2018 IEEE Global Communications Conference (GLOBECOM)},
        pages={1--6},
        year={2018},
        organization={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/glocom.2018.8648032",
    link: "refs/huang2018.pdf",
    description: `<ul>
			<li>Đánh giá sử dụng Information Leakage Rate (GSOP) RL</li>
      <li>2 bài toán tối ưu theo Rs và Rb: Cực đại thông lượng và Cực tiểu RL</li>
      <li>Công thức xấp xỉ RL (8) (vì trong công thức ban đầu có tích phân Ei)</li>
		</ul>`,
    _tags_: "design,gsop,x,int",
  },
  {
    cite: `@article{guvenkaya2017physical,
        title={On physical-layer concepts and metrics in secure signal transmission},
        author={Guvenkaya, Ertugrul and Hamamreh, Jehad M and Arslan, Huseyin},
        journal={Physical Communication},
        volume={25},
        pages={14--25},
        year={2017},
        publisher={Elsevier}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{liang2008multiple,
        title={Multiple-access channels with confidential messages},
        author={Liang, Yingbin and Poor, H Vincent},
        journal={IEEE Transactions on Information Theory},
        volume={54},
        number={3},
        pages={976--1002},
        year={2008},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{liu2008discrete,
        title={Discrete memoryless interference and broadcast channels with confidential messages: Secrecy rate regions},
        author={Liu, Ruoheng and Maric, Ivana and Spasojevic, Predrag and Yates, Roy D},
        journal={IEEE Transactions on Information Theory},
        volume={54},
        number={6},
        pages={2493--2507},
        year={2008},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{tekin2008general,
        title={The general Gaussian multiple-access and two-way wiretap channels: Achievable rates and cooperative jamming},
        author={Tekin, Ender and Yener, Aylin},
        journal={IEEE Transactions on Information Theory},
        volume={54},
        number={6},
        pages={2735--2751},
        year={2008},
        publisher={IEEE}
      }`,
    url: "",
    link: "",
    description: `<ul>
			<li></li>
		</ul>`,
    _tags_: "",
  },
  {
    cite: `@article{sheng2021physical,
        title={Physical layer security aided wireless interference networks in the presence of strong eavesdropper channels},
        author={Sheng, Zhichao and Tuan, Hoang Duong and Nasir, Ali Arshad and Poor, H Vincent and Dutkiewicz, Eryk},
        journal={IEEE Transactions on Information Forensics and Security},
        volume={16},
        pages={3228--3240},
        year={2021},
        publisher={IEEE}
      }`,
    url: "https://sci-hub.se/10.1109/tifs.2021.3076927",
    link: "refs/sheng2021.pdf",
    description: `<ul>
			<li><b>Time-fraction</b> transmission + AN</li>
      <li>Multi users pairs, multi eavesdroppers, MISOSE</li>
      <li>Kẻ nghe lén có điều kiện kênh truyền tốt hơn các users</li>
		</ul>`,
    _tags_: "csi,coop,design,x",
  },
];
