<script>
import Homepage from "./Homepage.vue"
import Events from "./Events.vue"
import Courses from "./Courses.vue"
import ContactUs from "./ContactUs.vue"
import AboutUs from "./AboutUs.vue"
import Alumni from "./Alumni.vue"
import Library from "./Library.vue"
import Partnerships from "./Partnerships.vue"
</script>

<template>
    <v-app-bar color="orange">
        <div>
            <v-btn to="/" colour="white" dark>Home </v-btn>
        </div>
        <div>
            <v-btn to="/Events" colour="white" dark>Events </v-btn>
        </div>
        <div>
            <v-btn to="/Courses" colour="white" dark>Courses </v-btn>
        </div>
        <div>
            <v-btn to="/ContactUs" colour="white" dark>ContactUs </v-btn>
        </div>
        <div>
            <v-btn to="/AboutUs" colour="white" dark>AboutUs </v-btn>
        </div>
        <div>
            <v-btn to="/Alumni" colour="white" dark>Alumni </v-btn>
        </div>
        <div>
            <v-btn to="/Library" colour="white" dark>Library </v-btn>
        </div>
        <div>
            <v-btn to="/Partnerships" colour="white" dark>Partnerships </v-btn>
        </div>
    </v-app-bar>
</template>