<script>
    import { Bar } from 'vue-chartjs'
    export default {
        extends: Bar,
        data: () => ({
                datacollection: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        barThickness:50,
                        data: [35, 59, 80, 81, 56, 55, 40],
                        backgroundColor:'rgba(145, 46, 252, 0.4)',
                        borderColor:"rgba(145, 46, 252, 0.6)",
                        borderWidth: 3,
                        hoverBackgroundColor:"rgba(145, 46, 252, 0.6)"
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor:'rgba(247, 49, 100, 0.4)',
                        borderColor:"rgba(247, 49, 100, 0.4)",
                        borderWidth: 3,
                        hoverBackgroundColor:"rgba(247, 49, 100, 0.4)"
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
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    mode: 'index'
                },
            }
        }),

        mounted () {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>

<style>
</style>