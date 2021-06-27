###GraphQL Schema:

type Employee {
id: ID!
image: String @examples(values:["https://3sr05l2l7ihe1u4u613nqp53-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/Umpqua-Bank1.jpg","https://thumbs.dreamstime.com/b/happy-smile-expression-employe-which-enjoy-his-job-adult-asia-asian-attractive-business-businessman-calm-cheerful-device-144309170.jpg","https://previews.123rf.com/images/deagreez/deagreez1811/deagreez181102377/112997207-close-up-photo-portrait-of-accountant-economist-employee-employe.jpg","https://thumbs.dreamstime.com/b/african-office-worker-portrait-handsome-male-talking-phone-44341693.jpg","https://biz30.timedoctor.com/images/2019/08/remote-employee-software.jpg"])
firstName: String @fake(type: firstName, locale: en_CA)
lastName: String @fake(type: lastName, locale: en_CA)
address: String @fake(type: streetAddress, options: { useFullAddress: true })
phone: String @fake(type:phoneNumber)
voteCount: Int @fake(type:number, options: {maxNumber: 0})
}

type Query{
employees:[Employee!]
}

###Run commands:

**1-** npm run install
**2-** npm run dev
