import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image, Linking } from 'react-native';


class Resume extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Resume'
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.color}>

                    {/*                   Summary            */}

                    <View>
                        <Text style={styles.textTitle}>Summary</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemLeft}>
                            <View style={styles.circular}></View>
                            <Text style={styles.itemText}>DANIEL CONSTANTE</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textcontent}>
                            Web developer able to build a Web presence from the ground up -- from concept,
                            navigation, layout and programming to UX and SEO.
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.textcontent}>
                            {'\u2022'} Skilled at writing well-designed, testable and efficient
                            code using current best practices in Web development.
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.textcontent} >
                            {'\u2022'} Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.textcontent} >
                            {'\u2022'} DFW AREA, Aubrey, TX
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.textcontent} >
                            {'\u2022'} (469) 703-5148
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.textcontent} >
                            {'\u2022'} daniel_constante86@hotmail.com
                        </Text>
                    </View>
                    <View style={styles.line}></View>

                    {/*                   Education            */}
                    <View>
                        <View>
                            <Text style={styles.textTitle}>Education</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>BUSSINESS ADMINISTRATION</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                2006 - 2008
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                Central University, Quito, Ec
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                Business Administration experienced, who is dedicated to creating efficiency at all levels of management.
                                Adept at critical analysis, developing comprehensive reports for management, and working as part of a team.                        </Text>
                        </View>
                        <View style={styles.line3}></View>

                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>WEB DEVELOPMENT FUNDAMENTALS</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                2020 - 2021
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                Nucamp Coding Bootcamp.
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                HTML, CSS, and JavaScript. Build your foundation with these three pillars of the Internet.
                            </Text>
                        </View>
                        <View style={styles.line3}></View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>FULL STACK WEB & MOBILE DEVELOPMENT</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                2020 - 2021
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                Nucamp Coding Bootcamp.
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                HTML, CSS, JavaScript, Jquery, Bootstrap, React, React Native, SASS, Social Media Marketing
                            </Text>
                        </View>
                        <View style={styles.line3}></View>
                    </View>

                    {/*                   PROFESSIONAL EXPERIENCE           */}
                    <View>
                        <View>
                            <Text style={styles.textTitle}>Professional Experience</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>PROJECT MANAGER</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                02/2017 to 03/2020
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                D&A Construction Group | Dallas, TX
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Developed and initiated projects. managed costs, and monitored performance.
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Identified plans and resources required to meet project goals and objectives.
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Updated operational methods, oversaw accounting procedures, tracked information and compiled data to improve efficiency.
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>CUSTOMER SERVICE REPRESENTATIVE AND SUPERVISOR</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                08/2014 to 01/2017
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                C&C Roofing Depot | Dallas, TX
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Provided primary customer support to internal and external customers.
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Maintained customer satisfaction with forward-thinking strategies focused on addressing customer needs and resolving concerns.
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Responded to customer requests for products, services and company information.
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Provided information regarding charge accounts and loyalty programs.
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Recommended products to customers, thoroughly explaining details.
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.line}></View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>STORE MANAGER</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                05/2008 to 02/2014
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                Distinction Taz Tattoos  |  Brooklyn, NY
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Reconciled daily sales transactions to balance and log day-to-day revenue.
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Delivered positive results by controling monthly operations budget and limiting financial dicrepancies.
                            </Text>
                        </View>
                        <View style={styles.lineEx}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Applied performance data to evaluate and improve operations, target current business conditions and forecast needs.
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Text style={styles.textcontent} >
                                {'\u2022'} Reviewed and monitored scheduling, purchases and other expenses to maintain quarterly budget.
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>

                    {/*                  Skills & Attributes            */}

                    <View>
                        <View>
                            <View>
                                <Text style={styles.textTitle}>Skills & Attributes</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>Attributes</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Strong analytical research skills
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Critical thinking, problem solving
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Mediation and arbitration
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Excellent written communication
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Extreme attention to detail
                            </Text>
                        </View>

                    </View>
                    <View>
                        <View style={styles.line2}></View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>WEB DEVELOPMENT AND TECHNOLOGIES</Text>
                            </View>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} HTML/CSS
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} SASS/SCSS
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} JavaScript
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} jQuery
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Java
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Bootstrap
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} ReactJS
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} React Native/Mobile Development
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Redux
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Expo.io
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Git/GitHub/GitBash
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} NPM/Yarn/WebPack
                            </Text>
                        </View>
                        <View style={styles.line2}></View>

                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} NodeJS
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} REST/RESTful API
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'}  Express
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} MongoDB
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} TypeScript
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Heroku
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} SQL
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} AWS (EC2, S3) 
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Azure
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} AndroidStudio
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Visual Studio Code
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                    </View>

                    {/*                  Languages           */}

                    <View>
                        <View>
                            <View>
                                <Text style={styles.textTitle}>Languages</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}></Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} English
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                {'\u2022'} Spanish
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                    </View>

                    {/*                  Languages           */}

                    <View>
                        <View>
                            <Text style={styles.textTitle}>Certifications</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>WEB DEVELOPMENT FUNDAMENTALS</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                Nucamp Coding BootCamp.
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                March 2021
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>FRONT-END WEB & MOBILE DEVELOPMENT</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                Nucamp Coding BootCamp.
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                        <View>
                            <Text style={styles.textcontent}>
                            August 2021
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>
                                    FULL STACK WEB & MOBILE DEVELOPMENT
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                Nucamp Coding BootCamp.
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                September 2021
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>
                                    AWS CLOUD PRACTITIONER
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                Udemy, Inc. / Amazon Web Services Inc.
                            </Text>
                        </View>
                        <View style={styles.line2}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                March 2021
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>
                                    PROJECT MANAGEMENT PROFESSIONAL
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                                Udemy, Inc.
                            </Text>
                        </View>
                        <View style={styles.lineCer}></View>
                        <View>
                            <Text style={styles.textcontent}>
                                February 2021
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>

                    {/*                  Projects and Colaborations           */}

                    <View>
                        <View>
                            <Text style={styles.textTitle}>Projects & Colaborations</Text>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>Bootstrap Campsites Website</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://nucampsitetx.netlify.app/')} >
                               URL to Nucamp Campsites Bootstrap
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/git-test')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>Bootstrap Portfolio Website</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://danielconstante.netlify.app/')} >
                               URL to Bootstrap Portfolio
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/nucamp-portfolio-project')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>React Campsites Website</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://react-campsites.netlify.app/')} >
                               URL to Nucamp Campsites React
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/react-campsites')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>React Portfolio Website</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://danielconstantereact.netlify.app/')} >
                               URL to React Portfolio 
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/React-Portfolio')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>React-Native Campsites App</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://expo.dev/@danielconstante/nucampsite')} >
                               URL to React-Native Campsites 
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/React-Native-Campsites')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>React-Native Portfolio App</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                               URL to React-Native Portfolio 
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/React-Native-Portfolio')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>JavaScript Text Animations</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://textanimations.netlify.app/')}>
                               URL to Text Animations 
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/text-animations')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.circular}></View>
                                <Text style={styles.itemText}>Google Page Clone</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textcontent}>
                               No URL for copy right
                            </Text>
                            <Text style={styles.textcontent} onPress={() => Linking.openURL('https://github.com/DanielConstante/google-clone')}>
                                Source Code/GitHub
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    








                </View>
            </ScrollView>
        );

    }
}



const styles = StyleSheet.create({
    color: {
        backgroundColor: 'black',
        height:4900,
    },
    textTitle: {
        color: '#16f1d4',
        fontSize: 24,
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textcontent: {
        fontSize: 16,
        color: '#fff',
        alignContent: 'center',
        textAlign: 'left',
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 35,
    },
    circular: {
        width: 13,
        height: 13,
        flexDirection: 'row',
        borderColor: '#16f1d4',
        backgroundColor: '#16f1d4',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 15
    },
    item: {
        //backgroundColor: '#FFF',
        //padding: 15,
        //borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    line: {
        flexDirection: 'row',
        width: 3,
        height: 75,
        backgroundColor: '#16f1d4',
        marginLeft: 20,
        marginTop: -66,
    },
    line2: {
        flexDirection: 'row',
        width: 3,
        height: 50,
        backgroundColor: '#16f1d4',
        marginLeft: 20,
        marginTop: -40,

    },
    line3: {
        flexDirection: 'row',
        width: 3,
        height: 105,
        backgroundColor: '#16f1d4',
        marginLeft: 20,
        marginTop: -99,
        marginBottom: 40
    },
    lineEx: {
        flexDirection: 'row',
        width: 3,
        height: 70,
        backgroundColor: '#16f1d4',
        marginLeft: 20,
        marginTop: -30,
        marginBottom: -35
    },
    lineCer: {
        flexDirection: 'row',
        width: 3,
        height: 70,
        backgroundColor: '#16f1d4',
        marginLeft: 20,
        marginTop: -30,
        marginBottom: -35
    },
    itemText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
        //maxWidth: '80%',
    }


});

export default Resume;