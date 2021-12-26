import React from 'react';
import { Text, View, Page, Document, StyleSheet } from '@react-pdf/renderer';

const css = StyleSheet.create({
  title: {
    backgroundColor: "beige",
    fontVariantCaps: "small-caps",
    fontFamily: "Times-Roman",
    textAlign: "right",
    fontSize: 24
  },
  page: {
    paddingHorizontal: 65,
    paddingVertical: 35
  },
  bold: {
    fontFamily: "Times-Roman",
    fontSize: 18,
    paddingVertical: 15
  },
  light: {
    fontFamily: "Times-Roman",
    fontSize: 16,
    color: "grey",
    width: "25%"
  },
  text: {
    fontFamily: "Times-Roman",
    fontSize: 16
  },
  thead: {
    flexDirection: "row",
    borderTop: 1,
    borderBottom: 1,
    marginTop: 35
  },
  tbody: {
    flexDirection: "row",
    borderBottom: 1,
    borderColor: "grey"
  },
  desc: {
    fontFamily: "Times-Roman",
    fontSize: 16,
    width: "75%"
  },
  cost: {
    fontFamily: "Times-Roman",
    fontSize: 16,
    textAlign: "right",
    width: "25%"
  },
  total: {
    fontFamily: "Times-Roman",
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: 1,
    width: "35%"
  }
});

export default function MyDocument(props) {

  return (
  <Document>
    <Page size="A4" style={css.page}>
      <Text style={css.title}>Invoice&nbsp;</Text>
      <Text style={css.bold}>Bill To:</Text>
      
      <View style={{flexDirection: "row"}}>
        <Text style={css.light}>Company:</Text>
        <Text style={[css.text,{fontWeight: "bold"}]}>{props.company}</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Text style={css.light}>Contact Name:</Text>
        <Text style={css.text}>{props.agent}</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Text style={css.light}>Address:</Text>
        <Text style={css.text}>{props.address}</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Text style={css.light}>Phone:</Text>
        <Text style={css.text}>{props.phone}</Text>
      </View>
      
      <View style={css.thead}>
        <Text style={css.desc}>Service Name</Text>
        <Text style={css.cost}>Price</Text>
      </View>
      {props.invoice.map(s=>(
      <View style={css.tbody}>
        <Text style={css.desc}>{s.desc}</Text>
        <Text style={css.cost}>{s.cost}</Text>
      </View>
      ))}
      
      <View style={{flexDirection: "row-reverse"}}>
        <View style={[css.total,{borderColor: "grey", marginTop: 10}]}>
          <Text>Sub Total:</Text>
          <Text>{props.subtotal}</Text>
        </View>
      </View>
      <View style={{flexDirection: "row-reverse"}}>
        <View style={[css.total,{borderColor: "grey"}]}>
          <Text>Tax Total:</Text>
          <Text>{props.tax}</Text>
        </View>
      </View>
      <View style={{flexDirection: "row-reverse"}}>
        <View style={css.total}>
          <Text>Grand Total:</Text>
          <Text>{Number(props.tax) + Number(props.subtotal)}</Text>
        </View>
      </View>
    </Page>
  </Document>
  );
}
