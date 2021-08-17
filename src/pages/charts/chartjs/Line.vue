<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        backgroundColor: "rgba(145, 46, 252, 0.3)",
                        borderColor: "rgba(145, 46, 252, 0.8)",
                        strokeColor: "#7366ff",
                        pointBackgroundColor: "#7366ff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "#fff",
                        pointHighlightStroke: "#000",
                        data: [10, 59, 80, 81, 56, 55, 40]
                    }, {
                        backgroundColor: "rgba(247, 49, 100, 0.3)",
                        borderColor: "rgba(247, 49, 100, 0.8)",
                        strokeColor: "#f73164",
                        pointBackgroundColor: "#f73164",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#000",
                        pointHoverBorderColor: "#000",
                        pointHighlightStroke: "rgba(30, 166, 236, 1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }]
                },
                options: {
                    animation: {
                        duration: 1000,
                        easing: 'linear'
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        yAxes: [{ticks: { beginAtZero: true, stepSize: 5,}}],
                        xAxes: [{barThickness: 39,}],
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },

                }
            }
        },
        mounted () {
            this.renderChart(this.linechart, this.options)
        }
    }
</script>

<style>
</style>