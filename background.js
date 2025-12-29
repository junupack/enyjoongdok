chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            url: "playentry.org/" // 이동할 사이트
          }
        },
        condition: {
          urlFilter: "playentry.org/community/entrystory/list?sort=created&term=all", // 막을 사이트
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});
