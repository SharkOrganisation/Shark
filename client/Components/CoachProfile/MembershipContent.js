import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { FIREBASE_AUTH } from "../../firebase";
import { Ionicons } from "@expo/vector-icons";

const MembershipContent = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  // const currentUser = FIREBASE_AUTH.currentUser;


  return (
    <TouchableOpacity style={styles.membershipContainer}>
      <Image
        style={styles.memberImage}
        source={{
          uri: "https://i.pinimg.com/564x/56/62/7b/56627b6eb4878d804900eec93adcc34c.jpg",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.membershipText}>
          Member Since 2022. Active and dedicated fitness enthusiast.
        </Text>
        <TouchableOpacity style={styles.ctaButton} onPress={toggleDescription}>
          <Ionicons name="arrow-forward-outline" size={24} />
        </TouchableOpacity>
        {showDescription && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Embracing the grind is a universal truth for champions. Muhammad
              Ali's words, "I hated every minute of training, but I said, ‘Don’t
              quit. Suffer now and live the rest of your life as a champion,’"
              echo the essence of enduring hardship for future triumph.
              Aristotle's timeless wisdom emphasizes that excellence is not an
              isolated act but a habitual endeavor. This philosophy converges
              with the belief that "The body achieves what the mind believes."
              Champions thrive on adversity, as seen in the conviction that "The
              hard days are the best because that’s when champions are made, so
              if you push through, you can push through anything." Results, a
              byproduct of effort, underscore the importance of time and work:
              "If you don’t find the time, if you don’t do the work, you don’t
              get the results.
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  membershipContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
  },
  memberImage: {
    width: 85,
    height: 85,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  membershipText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#9AC61C",
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: "#9AC61C",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  descriptionContainer: {
    backgroundColor: "#9AC61C",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: "black",
  },
});

export default MembershipContent;
