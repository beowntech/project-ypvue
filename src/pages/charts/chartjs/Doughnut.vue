<script>
    import {Doughnut} from 'vue-chartjs'

    export default {
        extends: Doughnut,
        data: () => ({
            datacollection : {
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: ["#7366ff", "#f73164", "#51bb25"],
                }],
                labels: ['Primary', 'Secondary', 'Success'],
            },
                options: {
                animation: {
                    duration: 1000,
                    easing: 'linear'
                },
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
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