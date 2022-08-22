import Chart from "chart.js/auto";
import http from "@/services/BackendServices";
export default {
  data() {
    return {
      noavailable: [],
      req: [],
      reqfinish: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },
  methods: {
    filterData(){
      const dates = ["2022-08-11", "2022-08-12", "2022-08-13", "2022-08-14", "2022-08-15", "2022-08-16"];
      const dates2 = [...dates];
      console.log(dates2);
      const startdate = document.getElementById('startdate');
      console.log(startdate);
      const enddate = document.getElementById('enddate');
      console.log(enddate);
      
    }
  },
  
  
  mounted() {
    
    /* line chart 1 */
    const dates = ["2022-08-11", "2022-08-12", "2022-08-13", "2022-08-14", "2022-08-15", "2022-08-16"];
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      
      data: {
        datasets: [{
          type: 'line',
          label: 'inStock',
          data: [15, 21, 30, 40,13,41,25],
          borderColor: "purple",
          tension:0.4
          
        }, {
          type: 'line',
          label: 'outStock',
          data: [30, 28, 3, 5, 2, 3,12],
          borderColor: "green",
          tension:0.4
        },
        {
          type: 'line',
            label: 'onProcess',
            data: [18, 20, 28, 27 ,7,1,5],
            borderColor: "blue",
            tension:0.4
        }
        ],
        labels: dates ,
    },
    
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }
    );
    myChart;
     /*  function filterData(){
        const dates2 = [...dates];
        console.log(dates2);
        
      } */
    /* line chart 1 */

     /* line chart 2 */
    const ctx2 = document.getElementById("myChart2");
    const myChart2 = new Chart(ctx2, {
      type: "line",
      
      data: {
        labels: ["17", "18", "19", "20", "21", "Today"],
        datasets: [
          {
            label: "Last 7 Day Transection",
            data: [30, 19, 3, 5, 2, 3],
            tension:0.4,
            borderColor: "pink",
            borderWidth: 1,
            
          },
        ],
      },
      
      
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    myChart2;
    
    
    /* line chart 1 */

    http
      .get(`position/status/1/1?page=${this.currentPage}`)
      .then((response) => {
        let responseNoAvailable = response.data;
        this.noavailable = responseNoAvailable;
      });

    http.get(`req?page=${this.currentPage}`).then((response) => {
      let responseReq = response.data;
      this.req = responseReq;
    });
    http.get(`req/status/3?page=${this.currentPage}`).then((response) => {
      let responseReqFinish = response.data;
      this.reqfinish = responseReqFinish;
    });
  },
  

  
};