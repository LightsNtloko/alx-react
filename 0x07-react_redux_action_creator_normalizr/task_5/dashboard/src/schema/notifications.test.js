import { normalizedData } from "./notifications";
import getAllNotificationsByUser from "./notifications";

jest.mock("../../../../notifications.json", () => ({
  default: [
    {
      id: "5debd76480edafc8af244228",
      author: { id: "5debd764f8452ef92346c772", name: "User 1" },
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "5debd764507712e7a1307303",
      author: { id: "5debd764f8452ef92346c772", name: "User 1" },
      context: "45d6b45f-8787-4d15-b1c7-68c4ec2f8ca1",
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
    },
    {
      id: "5debd76444dd4dafea89d53b",
      author: { id: "6cde4bfcc1234abc987654321", name: "User 2" },
      context: "1df41fbf-65ef-4b69-b52e-455c17d7d4f7",
      guid: "3d8e40be-1c78-4de0-afc9-fcc147afd4d3",
      isRead: false,
      type: "non-urgent",
      value: "Non-relevant notification",
    },
  ],
}));

describe("Tests for Notifications.js", () => {
  it("verifies that the function returns the correct data for a user", () => {
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
    const actual = getAllNotificationsByUser("5debd764f8452ef92346c772");
    expect(actual).toEqual(expect.arrayContaining(expected));
  });

  it("verifies the normalized data has the correct result array", () => {
    const expected = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
    ];
    expect(normalizedData.result).toEqual(expected);
  });

  it("verifies the normalized data has the correct users entity", () => {
    const expected = {
      id: "5debd764f8452ef92346c772",
      name: "User 1",
    };
    expect(normalizedData.entities.users["5debd764f8452ef92346c772"]).toEqual(
      expected
    );
  });

  it("verifies the normalized data has the correct messages entity", () => {
    const expected = {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    };
    expect(
      normalizedData.entities.messages["2d8e40be-1c78-4de0-afc9-fcc147afd4d2"]
    ).toEqual(expected);
  });

  it("verifies the normalized data has the correct notifications entity", () => {
    const expected = {
      id: "5debd76480edafc8af244228",
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
    };
    expect(
      normalizedData.entities.notifications["5debd76480edafc8af244228"]
    ).toEqual(expected);
  });
});
