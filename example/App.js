import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Markdown from "markdown-view";

export default function App() {
	var markdown = "# Welcome to React Native!\n\nMore content...";
	return <Markdown body={markdown}></Markdown>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
