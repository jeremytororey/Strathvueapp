<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="./../../public/pexels-pixabay-256490.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./../../public/pexels-abby-chung-1106468.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./../../public/pexels-nothing-ahead-3043114.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card
                                width="400"
                                title="The life of a student"
                                subtitle="On-campus"
                                text="As a student, campus life is a vibrant tapestry woven with a myriad of experiences, challenges, and opportunities. It's a bustling ecosystem where academia, social interactions, and personal growth converge to shape our collegiate journey.

One of the most compelling aspects of campus life is the sense of community. Whether it's through dormitory living, shared classes, or participation in clubs and organizations, students form connections that often last a lifetime. These relationships extend beyond academic pursuits, fostering a support network that celebrates successes, navigates setbacks, and shares in the joys and trials of university life.

Academically, campus life is characterized by a rich tapestry of learning experiences. From lectures and seminars to hands-on research projects and internships, students engage with diverse subjects and perspectives that expand their intellectual horizons. The campus becomes a hub of knowledge dissemination and discovery, where students are encouraged to question, analyze, and innovate.

Yet, campus life isn't solely confined to the academic sphere. It's a melting pot of cultures, interests, and ideologies, where students explore their passions through extracurricular activities, sports, and artistic endeavors. Whether it's joining a debate team, volunteering for community service projects, or participating in cultural festivals, students embrace opportunities to explore new interests, challenge their comfort zones, and cultivate well-rounded identities.

Of course, campus life also presents its share of challenges. Balancing academic responsibilities with social commitments, managing time effectively, and navigating newfound independence can be daunting tasks. However, these challenges serve as catalysts for personal growth, resilience, and self-discovery. Through perseverance and support from peers and mentors, students learn to overcome obstacles, adapt to new environments, and emerge stronger and more resilient individuals.

Ultimately, campus life is a transformative journey characterized by growth, exploration, and camaraderie. It's a chapter in our lives where we forge lasting memories, build lifelong friendships, and lay the foundation for our future endeavors. And while each student's experience may differ, the collective tapestry of campus life weaves together a vibrant mosaic of diversity, creativity, and shared humanity."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Accommodation in Campus
                                </template>

                                <template v-slot:subtitle>
                                 Hospitality department
                                </template>

                                <template v-slot:text>
                                    Accommodation on campus refers to housing options provided by universities and colleges for students who wish to live near or on the campus grounds. This type of housing is often convenient for students, as it places them close to academic buildings, libraries, dining facilities, and other campus resources. Here are some key aspects of accommodation on campus:

1. **Residence Halls/Dormitories:** These are the most common forms of on-campus accommodation. Residence halls are typically multi-story buildings with individual rooms or suites for students. Dormitories may have communal bathrooms, lounges, and study areas. Some universities offer themed or specialized residence halls based on academic interests or lifestyle preferences.

2. **Room Types:** On-campus housing usually offers various room types, including single rooms, double rooms (shared with one roommate), suites, and apartments. Room configurations and amenities vary depending on the specific residence hall and university policies.

3. **Amenities:** On-campus housing often provides essential amenities such as furniture, internet access, heating, air conditioning, and basic utilities (water, electricity). Some residence halls may also feature amenities like communal kitchens, laundry facilities, fitness centers, study lounges, and recreational spaces.

4. **Meal Plans:** Many universities require students living on campus to enroll in a meal plan. Meal plans typically provide access to campus dining halls or eateries, offering a variety of meal options throughout the day. Meal plans may be structured as unlimited access, block plans, or a combination of both.

5. **Community Life:** Living on campus fosters a sense of community among students. Residence halls often organize social events, academic programs, cultural activities, and community service projects to promote interaction and engagement among residents. Resident assistants (RAs) or resident advisors (RAs) are typically available to provide support, guidance, and resources to students living in the residence halls.

6. **Safety and Security:** Campus housing prioritizes the safety and security of residents. Most residence halls have security measures in place, such as keycard access, surveillance cameras, and on-site staff or security personnel. Universities also provide emergency response protocols and resources to ensure the well-being of students living on campus.

7. **Application Process:** Students interested in living on campus typically need to apply for housing through the university's housing office or residence life department. The application process may involve submitting preferences for roommates, room types, and residence hall preferences. Housing assignments are often based on availability and priority criteria established by the university.

Overall, on-campus accommodation offers students a convenient and supportive living environment that enhances their college experience. It provides opportunities for personal growth, social interaction, and academic engagement while fostering a sense of belonging within the university community.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>Clubs and Societies</v-card-title>

                                    <v-card-subtitle>From the clubs and societies department</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Clubs and societies on campus play a significant role in enriching the student experience, fostering personal growth, and building community. These organizations cater to a wide range of interests, hobbies, and passions, providing students with opportunities for social interaction, leadership development, and skill enhancement. Here are some key aspects of clubs and societies on campus:

1. **Diversity of Options:** Campuses typically host a diverse array of clubs and societies, catering to various interests, academic disciplines, cultural backgrounds, and recreational activities. Students can explore a wide range of options, including academic clubs, cultural organizations, sports teams, performing arts groups, community service initiatives, political associations, and special interest clubs.

2. **Student Leadership:** Clubs and societies provide platforms for students to develop leadership skills, organizational abilities, and teamwork capabilities. Students have the opportunity to take on leadership roles such as president, vice president, treasurer, secretary, or committee chairperson, where they can plan events, manage finances, coordinate activities, and engage with members.

3. **Skill Development:** Participation in clubs and societies offers students opportunities to develop and refine various skills beyond the classroom. Depending on the nature of the organization, students may enhance their communication skills, organizational skills, problem-solving abilities, project management capabilities, and teamwork dynamics through active involvement and participation.

4. **Social Engagement:** Clubs and societies serve as avenues for social interaction, networking, and building friendships among students who share common interests and passions. These organizations host social events, meetings, workshops, retreats, and outings that facilitate bonding, camaraderie, and cultural exchange among members.

5. **Personal Growth:** In addition to skill development and social engagement, clubs and societies contribute to students' personal growth and self-discovery. Participation in extracurricular activities allows students to explore new interests, pursue creative outlets, challenge themselves, and expand their horizons in a supportive and inclusive environment.

6. **Impact and Outreach:** Many clubs and societies engage in community service projects, advocacy initiatives, and outreach programs that contribute to the broader campus community and society at large. Students involved in these organizations have the opportunity to make a positive impact, raise awareness about important issues, and effect meaningful change through collective action and service-oriented projects.

7. **Institutional Support:** Universities and colleges typically provide support and resources to clubs and societies, including funding, meeting spaces, event planning assistance, marketing and promotional support, and access to faculty advisors or mentors. Institutional support helps ensure the sustainability, effectiveness, and visibility of clubs and societies on campus.

Overall, clubs and societies play a vital role in enhancing the holistic student experience, promoting engagement and involvement, and fostering a sense of belonging within the campus community. These organizations empower students to pursue their passions, cultivate leadership skills, and make meaningful contributions to campus life and beyond.
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>