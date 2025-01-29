import getAllNotificationsByUser from "./notifications";

jest.mock("../../../../notifications.json", () => ({
  default: [
    {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      author: { id: "5debd764a7c57c7839d722e9", name: "User 1" },
    },
    {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      author: { id: "5debd764a7c57c7839d722e9", name: "User 1" },
    },
    {
      guid: "3d8e40be-1c78-4de0-afc9-fcc147afd4d3",
      isRead: false,
      type: "non-urgent",
      value: "Non-relevant notification",
      author: { id: "6cde4bfcc1234abc987654321", name: "User 2" },
    },
  ],
}));

describe("Tests for Notifications.js", () => {
  it("verifies that the function returns the correct data", () => {
    const expected = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value:
          "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      },
    ];
    const actual = getAllNotificationsByUser("5debd764a7c57c7839d722e9");

    expect(actual).toEqual(expect.arrayContaining(expected));
  });
});
