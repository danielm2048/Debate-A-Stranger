import { createStore, action } from "easy-peasy";

const savedUser = sessionStorage.getItem("userName");

const userModel = {
	userName: savedUser ? savedUser : "",
	setUserName: action((state, payload) => {
		state.userName = payload;
		sessionStorage.setItem("userName", payload);
	}),
	topic: "",
	setTopic: action((state, payload) => {
		state.topic = payload;
	}),
	yayOrNay: null,
	setYayOrNay: action((state, payload) => {
		state.yayOrNay = payload;
	}),
};

const topics = [
	"All people should be vegans",
	"All people should have the right to own guns",
	"The death penalty should be abolished",
	"All drugs should be legalized",
	"Animal testing should be banned",
	"Climate change is the greatest threat facing humanity today",
	"Sex work should be legal",
	"Sexual education should be mandatory in schools",
	"Every citizen should be mandated to perform national public service",
	"Violent video games should be banned",
	"Social media has improved human communication",
	"Humans should invest in technology to explore and colonize other planets",
	"The development of artificial intelligence will help humanity",
];

const storeModel = { user: userModel, topics };

const store = createStore(storeModel);

export default store;
