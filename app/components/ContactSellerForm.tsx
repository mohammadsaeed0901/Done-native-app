import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import { Form, FormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";
import { type IListing } from "../screens/ListingsScreen";
import { type FormikHelpers } from "formik";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
});

function ContactSellerForm({ listing }: { listing: IListing }) {
  const handleSubmit = async ({ message }: { message: string }, formikHelpers: FormikHelpers<string>) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    formikHelpers.resetForm();

    await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Look at that notification',
          body: "I'm so proud of myself!",
        },
        trigger: { seconds: 0 }
    });
  };

  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
