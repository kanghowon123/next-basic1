export type SelectItems = {
  id: number;
  image: any;
  title: string;
  subTitle: string;
};

export type SubCardItems = {
  id: number;
  itemImage: any;
  wifi: any;
  title: string;
  percent: number;
  price: string;
  width: string;
};

export type WonderFiItem = {
  id: number;
  itemImage: any;
  wonderFi: any;
  title: string;
  date: string;
  price: string;
};

interface FooterCompany {
  name: string;
  image: any;
  address: string;
  mapLink: string;
}

interface FooterMessenger {
  email: string;
  kakao: string;
  phone: string;
}

interface FooterContact {
  email: string;
  kakaoKo: string;
  kakaoInt: string;
  phone: string;
}

interface MethodItem {
  messenger?: FooterMessenger;
  contact?: FooterContact;
}

interface FooterSection {
  id: string;
  title: string;
  titleEn: string;
  order: string;
  links?: { text: string; url: string }[];
  info?: { label: string; sub?: string; holiday: string }[];
  methods?: MethodItem[];
}

export interface FooterData {
  company: FooterCompany;
  sections: FooterSection[];
}
