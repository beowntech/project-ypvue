<script>
    import {Doughnut} from 'vue-chartjs'

    export default {
        extends: Doughnut,
        props: ['completed','notCompleted'],
        created() {
            this.datacollection.datasets[0].data = [this.completed, this.notCompleted]
        },
        data: () => ({
            datacollection: {
                datasets: [{
                    data: [0,0],
                    backgroundColor: ["#51bb25", "#f73164"],
                }],
                labels: ['Completed', 'Not Completed'],
            },
            options: {
                animation: {
                    duration: 500,
                    easing: 'linear'
                },
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    display: false,
                    mode: 'index',
                    intersect: false,
                },


            }
        }),

        mounted() {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>

<style>
</style>