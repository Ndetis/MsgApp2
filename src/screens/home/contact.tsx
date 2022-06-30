import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Modal,
  FlatList,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Button from '../../components/button'

type PickableContact = {
  name: string;
  phone: string;
};

type ContactListItem = {
  item: PickableContact;
  index: number;
};

function renderContactListItem({ item: contact }: ContactListItem) {
  return (
    <View style={styles.listItem}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>
          {contact.name}
        </Text>
        <Text style={styles.phone}>
          {contact.phone}
        </Text>
      </View>
    </View>
  )
}

function ContactsList() {
  const [allContacts, setAllContacts] = useState<PickableContact[]>([]);
  const [tempSelectedContacts, setTempSelectedContacts] = useState<number[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<PickableContact[]>([]);
  const [shouldShowModal, setModalStatus] = useState(false);

  async function loadContacts() {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
          title: "Contacts",
          message: "This app would like to view your contacts.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        });

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Error", "Contact permission is required!");
          return null;
        } 
    }
    
    Contacts.getAll()
      .then(contacts => {
        const namedContacts = contacts.map(c => {
          const name = (c.givenName + " " + c.middleName + " " + c.familyName).trim();

          return c.phoneNumbers.map(p => ({
            name,
            phone: p.number,
          }))
        });

        const simplifiedContacts = namedContacts.reduce((arr, val) => arr.concat(val));

        // set contacts
        setAllContacts(simplifiedContacts);
      })
      .catch(e => {
        Alert.alert("Error", e);
      });
  }

  function showContactModal() {
    loadContacts();
    setModalStatus(true);
    setTempSelectedContacts(selectedIndices);
  }

  function selectContact(index: number) {
    setTempSelectedContacts([
      ...tempSelectedContacts,
      index,
    ]);
  }

  function removeContact(index: number) {
    const existingIndex = tempSelectedContacts.indexOf(index);

    if (existingIndex > -1) {
      tempSelectedContacts.splice(existingIndex, 1);
      setTempSelectedContacts([...tempSelectedContacts]);
    }
  }

  function selectAllContacts() {
    setTempSelectedContacts(allContacts.map((a, i) => i));
  }

  function unselectAllContacts() {
    setTempSelectedContacts([]);
  }

  function cancelSelection() {
    setModalStatus(false);
  }

  function confirmSelection() {
    setModalStatus(false);

    setSelectedIndices(tempSelectedContacts);
    setSelectedContacts(
      allContacts.filter((c, i) => tempSelectedContacts.indexOf(i) > -1)
    );
  }

  function renderPickContactItem({ item: contact, index }: ContactListItem) {
    return (
      <View style={styles.listItem}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>
            {contact.name}
          </Text>
          <Text style={styles.phone}>
            {contact.phone}
          </Text>
        </View>
        {
          tempSelectedContacts.indexOf(index) > -1 ? (
            <Button
              style={styles.actionBtn}
              textStyle={styles.removeText}
              title="Remove"
              onPress={() => removeContact(index)}
            />
          ) : (
              <Button
                style={styles.actionBtn}
                title="Select"
                onPress={() => selectContact(index)}
              />
            )
        }
      </View>
    )
  }

  function renderContactModal() {
    return (
      <Modal
        onRequestClose={cancelSelection}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.header}>
            <Button
              title="Back"
              style={styles.backBtn}
              onPress={cancelSelection}
            />
            <Text style={styles.title}>
              Select Contacts
              </Text>
            <Button
              title="Done"
              style={styles.doneBtn}
              onPress={confirmSelection}
            />
          </View>
          <FlatList
            style={styles.contactList}
            contentContainerStyle={styles.contactListContent}
            data={allContacts}
            renderItem={renderPickContactItem}
            keyExtractor={(item, index) => index + item.name + item.phone}
            getItemLayout={(data, index) => ({ length: 70, offset: index * 70, index })}
          />
          {
            tempSelectedContacts.length === allContacts.length ? (
              <Button
                style={styles.toggleBtn}
                textStyle={styles.toggleBtnText}
                title="Unselect All"
                onPress={unselectAllContacts}
              />
            ) : (
                <Button
                  style={styles.toggleBtn}
                  textStyle={styles.toggleBtnText}
                  title="Select All"
                  onPress={selectAllContacts}
                />
              )
          }
        </SafeAreaView>
      </Modal>
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {shouldShowModal && renderContactModal()}
      <SafeAreaView style={styles.container}>
        <Button
          style={styles.contactBtn}
          title="Select Contacts"
          onPress={showContactModal}
        />
        <FlatList
          style={styles.selectedList}
          data={selectedContacts}
          renderItem={renderContactListItem}
          keyExtractor={(item, index) => index + item.name + item.phone}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
  },
  contactBtn: {
    padding: 4,
    marginVertical: 16,
    marginHorizontal: 32,
    elevation: Platform.select({
      android: 4,
      default: 0,
    }),
    borderWidth: Platform.select({
      android: 0,
      default: 1,
    }),
    borderColor: "#ddd",
    borderRadius: 20,
  },
  selectedList: {
    flex: 1,
  },
  contactList: {
    flex: 1,
  },
  contactListContent: {
    paddingBottom: 100,
  },
  listItem: {
    padding: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    height: 70,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 8,
  },
  phone: {
    fontSize: 15,
    color: "#333333",
  },
  actionBtn: {
    width: 90,
  },
  removeText: {
    color: "#dd3333"
  },
  header: {
    flexDirection: "row",
    borderBottomColor: "#dddddd",
    borderBottomWidth: Platform.select({
      android: 0,
      default: 1,
    }),
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    elevation: Platform.select({
      android: 4,
      default: 0,
    }),
  },
  backBtn: {
    padding: 12,
  },
  title: {
    padding: 12,
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  doneBtn: {
    padding: 12,
  },
  toggleBtn: {
    position: "absolute",
    bottom: 30,
    left: 80,
    right: 80,
    backgroundColor: "#dd0000",
    borderRadius: 40,
  },
  toggleBtnText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default ContactsList;