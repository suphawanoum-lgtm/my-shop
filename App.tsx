import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function App() {
  const animals = [
    {
        id: 1,
        name: "เลียงผา",
    },
    {
        id: 2,
        name: "สล๊อด",
    },
    {
        id: 3,
        name: "อูฐ",
    },
    {
        id: 4,
        name: "สมเสร็จ",
    },
    {
        id: 5,
        name: "ยีราฟ",
    },
    {
        id: 6,
        name: "ฮิปโป",
    },
    {
        id: 7,
        name: "แรคคูน",
    },
    {
        id: 8,
        name: "นกยูง",
    },
    {
        id: 9,
        name: "แมว",
    },
    {
        id: 10,
        name: "หมา",
    },
    {
        id: 11,
        name: "จิงโจ้",
    },
    {
        id: 12,
        name: "ลิง",
    },
    {
        id: 13,
        name: "นกกระจอกเทศ",
    },
    {
        id: 14,
        name: "ม้า",
    },
    {
        id: 15,
        name: "แพะ",
    },
    {
        id: 16,
        name: "หมี",
    },
    {
        id: 17,
        name: "ม้าลาย",
    },
    {
        id: 18,
        name: "กระต่าย",
    },
    {
        id: 19,
        name: "กระทิง",
    },
    {
        id: 20,
        name: "ควาย",
    },
]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>แนะนำสัตว์</Text>
        <Text style={styles.discription}>( 20 รายการ )</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {animals.map((m) => (
          <View style={styles.card} key={m.id}>
            <Text style={styles.index}>ตัวที่ {m.id}</Text>
            <Text style={styles.title}>{m.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#f01e1eff",
  },
  topic: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  discription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  body: {
    backgroundColor: "#ee6767ff",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    justifyContent: "center",
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  index: {
    fontSize: 18,
    fontWeight: "800",
  },
  title: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 10,
    color: "#3a3a3dff",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#68686bff",
  },
});