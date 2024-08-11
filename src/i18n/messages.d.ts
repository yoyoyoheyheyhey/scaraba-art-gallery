export interface Messages {
  common: {
    readMore: string
  },
  navList: {
    featuredExhibition: string;
    about: string;
    artists: string;
  };
  tagline: {
    line1: string;
    line2: string;
  };
  conlliu: {
    subtitle: string;
    subDesc: string;
    desc: {
      title: string;
      section1: {
        p: string
      },
      section2: {
        header: string;
        p: string
      },
      section3: {
        header: string;
        p: string
      },
      section4: {
        header: string;
        p: string
      },
    }
  },
  momentsOf39: {
    header: {
      line1: string; 
      line2: string; 
    },
  },
  roadmap: {
    header: string,
    section1: {
      subDesc: string;
      header: string;
      desc: string;
    },
    section2: {
      subDesc: string;
      header: string;
      desc: string;
    },
    section3: {
      subDesc: string;
      header: string;
      desc: string;
    },
  },
  mysteries: {
    header: {
      line1: string
      line2: string,
      line3: string,
    },
  },
  we: {
    curate: string;
    discover: string;
    manifest: string;
    empower: string;
  }
}