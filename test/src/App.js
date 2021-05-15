console.log("app is running!");

class App {
  $target = null;
  data = [];

  dataPicture = [
    {
      id: "smuGD4z2U",
      url: "https://cdn2.thecatapi.com/images/smuGD4z2U.jpg",
      name: "Ragdoll / 랙돌",
    },
    {
      id: "ZfqxG7ZHH",
      url: "https://cdn2.thecatapi.com/images/ZfqxG7ZHH.jpg",
      name: "Exotic Shorthair / 엑조틱 숏헤어",
    },
    {
      id: "TuXvdAni3",
      url: "https://cdn2.thecatapi.com/images/TuXvdAni3.jpg",
      name: "Exotic Shorthair / 엑조틱 숏헤어",
    },
    {
      id: "rPTbM2Tvt",
      url: "https://cdn2.thecatapi.com/images/rPTbM2Tvt.png",
      name: "Sphynx / 스핑크스",
    },
    {
      id: "TnwHiS7nO",
      url: "https://cdn2.thecatapi.com/images/TnwHiS7nO.jpg",
      name: "Ragdoll / 랙돌",
    },
    {
      id: "xfkK4cQvp",
      url: "https://cdn2.thecatapi.com/images/xfkK4cQvp.jpg",
      name: "Selkirk Rex / 셀커크 렉스",
    },
    {
      id: "f_NV_6GZQ",
      url: "https://cdn2.thecatapi.com/images/f_NV_6GZQ.jpg",
      name: "Munchkin / 먼치킨",
    },
    {
      id: "aaxNf4D0H",
      url: "https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg",
      name: "Bengal / 벵갈",
    },
    {
      id: "ZdhQh9wc9",
      url: "https://cdn2.thecatapi.com/images/ZdhQh9wc9.jpg",
      name: "British Shorthair / 브리티쉬 숏헤어",
    },
    {
      id: "mZZzMlywy",
      url: "https://cdn2.thecatapi.com/images/mZZzMlywy.jpg",
      name: "Munchkin / 먼치킨",
    },
    {
      id: "w6CQYXYjy",
      url: "https://cdn2.thecatapi.com/images/w6CQYXYjy.jpg",
      name: "LaPerm / 라팜",
    },
    {
      id: "VQ_DGs4R8",
      url: "https://cdn2.thecatapi.com/images/VQ_DGs4R8.jpg",
      name: "Ocicat / 오시캣",
    },
    {
      id: "aJAsEA8uU",
      url: "https://cdn2.thecatapi.com/images/aJAsEA8uU.jpg",
      name: "Ocicat / 오시캣",
    },
    {
      id: "O0mRNLlqd",
      url: "https://cdn2.thecatapi.com/images/O0mRNLlqd.jpg",
      name: "Malayan / 말레이안",
    },
    {
      id: "BjIppqbNI",
      url: "https://cdn2.thecatapi.com/images/BjIppqbNI.jpg",
      name: "Cheetoh / 치토",
    },
    {
      id: "zEpUrnbJg",
      url: "https://cdn2.thecatapi.com/images/zEpUrnbJg.jpg",
      name: "Pixie-bob / 픽시 밥",
    },
    {
      id: "BDMOZo668",
      url: "https://cdn2.thecatapi.com/images/BDMOZo668.jpg",
      name: "Colorpoint Shorthair / 컬러포인트 숏헤어",
    },
    {
      id: "mK0P2HlfO",
      url: "https://cdn2.thecatapi.com/images/mK0P2HlfO.jpg",
      name: "Ragamuffin / 라가머핀",
    },
    {
      id: "MK-sYESvO",
      url: "https://cdn2.thecatapi.com/images/MK-sYESvO.jpg",
      name: "Snowshoe / 스노우슈",
    },
    {
      id: "P-Zyb-4BZ",
      url: "https://cdn2.thecatapi.com/images/P-Zyb-4BZ.jpg",
      name: "Javanese / 자바니즈",
    },
    {
      id: "zJkeHza2K",
      url: "https://cdn2.thecatapi.com/images/zJkeHza2K.jpg",
      name: "Exotic Shorthair / 엑조틱 숏헤어",
    },
    {
      id: "GcZbVDVi8",
      url: "https://cdn2.thecatapi.com/images/GcZbVDVi8.jpg",
      name: "Ragamuffin / 라가머핀",
    },
    {
      id: "N8bl5RjPG",
      url: "https://cdn2.thecatapi.com/images/N8bl5RjPG.jpg",
      name: "British Shorthair / 브리티쉬 숏헤어",
    },
    {
      id: "MxaS9brW9",
      url: "https://cdn2.thecatapi.com/images/MxaS9brW9.jpg",
      name: "LaPerm / 라팜",
    },
    {
      id: "2N4PhyqTG",
      url: "https://cdn2.thecatapi.com/images/2N4PhyqTG.jpg",
      name: "Exotic Shorthair / 엑조틱 숏헤어",
    },
    {
      id: "WAwazYKhH",
      url: "https://cdn2.thecatapi.com/images/WAwazYKhH.jpg",
      name: "Javanese / 자바니즈",
    },
    {
      id: "fG-wtktoL",
      url: "https://cdn2.thecatapi.com/images/fG-wtktoL.jpg",
      name: "Maine Coon / 메인쿤",
    },
    {
      id: "nJsljkalm",
      url: "https://cdn2.thecatapi.com/images/nJsljkalm.jpg",
      name: "British Shorthair / 브리티쉬 숏헤어",
    },
    {
      id: "k5Vrnaz_Q",
      url: "https://cdn2.thecatapi.com/images/k5Vrnaz_Q.jpg",
      name: "Siamese / 샴 고양이",
    },
    {
      id: "P-Zyb-4BZ",
      url: "https://cdn2.thecatapi.com/images/P-Zyb-4BZ.jpg",
      name: "Javanese / 자바니즈",
    },
    {
      id: "FCNqMC83P",
      url: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
      name: "Exotic Shorthair / 엑조틱 숏헤어",
    },
    {
      id: "cua3trGPU",
      url: "https://cdn2.thecatapi.com/images/cua3trGPU.jpg",
      name: "Javanese / 자바니즈",
    },
  ];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        // console.log(keyword);
        // console.log(this.dataPicture);
        this.setState(this.dataPicture);
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });
    console.log(this);

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
