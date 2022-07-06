var app = new Vue({
    el: '#app',
    data: {
        api: "https://api.nasa.gov/planetary/apod?api_key=6SVh9yxWdaLqDIHWIcThJhCabOX4hHLS6x7TZXLA",
        loading: true,
        errored: false,
        title: "",
        imgSrc: "",
        desc: ""
    },
    methods: {
        loadData: function () {
            fetch(this.api)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.title = data.title;
                    this.imgSrc = data.hdurl;
                    this.desc = data.explanation;
                    this.loading = false;
                    return data;
                })
                .catch(err => {
                    this.errored = true;
                });
        }
    },
    beforeMount() {
        this.loadData()
    }
  })