// 전화번호부 관련 타입을 정의한 인터페이스
interface PhoneNumberDictionary {
  //
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
// api 함수 promise: 반환값 promise
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];

  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  // 전반적으로 조작할 전화번호부 목록 저장
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */

  // 입력받은 이름으로 연락처를 찾는 메서드
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  // 주소로 연락처를 찾는 메소드
  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // 전화 번호와 번호 유형으로 연락처를 찾는 메소드
  findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
    return this.contacts.filter(contact => contact.phones[phoneType].num === phoneNumber);
  }

  // 새 연락처를 전화번호부에 추가하는 메서드
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  // 전화번호부 목록의 이름만 추출해서 화면에 표시하는 메서드 (화면 조작 관련 코드없음)
  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  // 전화번호부 목록의 주소를 화면에 표시하는 메소드 (화면 조작 관련 코드 없음)
  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

// 일반적으로 인스턴스는 변수에 할당되기에
// eslint에서는 new 키워드로 인한 부작용을 예측하여 에러 표시
// 함수로 호출
(function (): AddressBook {
  return new AddressBook();
})();
