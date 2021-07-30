console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
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

var convertData = {
  buyNowCartNo: ""
  customerAddress: "06000,서울 강남구 강남대로 708 (압구정동&nbsp; 한남대교레인보우카폐),123123"
  customerBirthDate: "1998,04,05"
  customerEmail: "ZHNhZGFzYUBuYXZlci5jb20="
  customerId: "c2Rhc2Q="
  customerName: "Admin"
  customerPassword: "YXNkMTIz"
  customerPhone: "010,3123,1561"
  customerRecommender: "dddd"
  customerSex: "01"
  marketingAgreement: true
  memberNo: "1"
  orderType: ""
  

}
