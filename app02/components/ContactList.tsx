import { JSX } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = { isDarkMode: boolean };

const ContactList = ({ isDarkMode }: Props): JSX.Element => {
  const contacts = [
    {
      _id: "67d402628d44314a3b573bc9",
      email: "sandipbehera681@gmail.com",
      fullName: "Sandip Kumar Behera",
      avatar:
        "http://res.cloudinary.com/dli6pvfww/image/upload/v1741947488/off6oxjicvxgpiswugjc.jpg",
    },
    {
      _id: "67e784c611e3539f37e00656",
      email: "rasmiranjansahoo702@gmail.com",
      fullName: "Rasmiranjan Sahoo",
      avatar:
        "http://res.cloudinary.com/dli6pvfww/image/upload/v1743226053/vwac1r3olvzqb54sv9ob.jpg",
    },
    {
      _id: "67f24561aca02d834fc7bc66",
      email: "jeebanjyotimca23@imit.ac.in",
      fullName: "Jeebanjyoti Mallik",
      avatar:
        "http://res.cloudinary.com/dli6pvfww/image/upload/v1743930719/omp1attp6uneyqtpm2at.jpg",
    },
    {
      _id: "67f4e452f207fee3b3f36a5d",
      email: "suvendubehera591@gmail.com",
      fullName: "Suvendu Behera",
      avatar:
        "http://res.cloudinary.com/dli6pvfww/image/upload/v1744137169/z3ryd3sgl6vda5psaqud.webp",
    },
  ];
  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.highlightText,
          isDarkMode ? styles.whiteText : styles.blackText,
        ]}
      >
        Contact Us
      </Text>
      <ScrollView>
        {contacts.map(({ _id, email, fullName, avatar }) => (
          <View key={_id} style={styles.userCard}>
            <Image source={{ uri: avatar }} style={styles.avatarImage} />
            <View style={styles.userDetailsContainer}>
              <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                {fullName}
              </Text>
              <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                {email}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { marginVertical: 2, marginHorizontal: 2 },
  highlightText: { fontSize: 24, fontWeight: "bold" },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  avatarImage: { height: 60, width: 60, borderRadius: 50 },
  userDetailsContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  userCard: { flex: 1, flexDirection: "row", margin: 2 },
});

export default ContactList;
