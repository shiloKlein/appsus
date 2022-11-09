import { noteService } from '../apps/keep/services/note.service.js'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

import noteFilter from '../apps/keep/cmps/note-filter.cmp.js'
import noteList from '../apps/keep/cmps/note-list.cmp.js'

export default {
    template: `
    <section class="car-app">
        <car-filter @filter="setFilter"/>
        <router-link to="/car/edit">Add a car</router-link>
        <car-list 
            @remove="removeCar" 
            :cars="carsToShow"/>
    </section>
    `,
    data() {
        return {
            cars: [],
            filterBy: {
                vendor: '',
                minSpeed: 0
            },
        }
    },
    created() {
        carService.query()
            .then(cars => {
                this.cars = cars
            })
    },
    methods: {
        removeCar(carId) {
            carService.remove(carId)
                .then(() => {
                    const idx = this.cars.findIndex(car => car.id === carId)
                    this.cars.splice(idx, 1)
                    showSuccessMsg(`Car ${carId} deleted`)
                })
                .catch(err => {
                    console.log('OOPS', err)
                    showErrorMsg('Cannot remove car')
                })

        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        carsToShow() {
            const regex = new RegExp(this.filterBy.vendor, 'i')
            var cars = this.cars.filter(car => regex.test(car.vendor))
            cars = cars.filter(car => car.maxSpeed > this.filterBy.minSpeed)
            return cars

        }
    },
    components: {
        carFilter,
        carList,
    }
}