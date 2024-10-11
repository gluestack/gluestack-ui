export function convertSidebarItemsToPathsArray(sidebarItems: any): any {
  const pages = [];
  if (sidebarItems && sidebarItems?.length > 0) {
    for (let i = 0; i < sidebarItems.length; i++) {
      const page = sidebarItems[i];
      if (page && page.id) {
        let x = {};
        // @ts-ignore
        x[page?.title] = page.id;
        pages.push(x);
      }

      if (page?.pages?.length > 0) {
        pages.push(...convertSidebarItemsToPathsArray(page.pages));
      }
    }
  }
  return pages;
}

export function getPrevAndNextLinks(pages: any, currentRoute: any) {
  const currentIndex = pages.findIndex(
    (page: any) => Object.values(page)[0] === currentRoute
  );

  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const prevLink = prevIndex >= 0 ? Object.values(pages[prevIndex])[0] : null;
  const prevText = prevIndex >= 0 ? Object.keys(pages[prevIndex])[0] : null;
  const nextLink =
    nextIndex < pages.length ? Object.values(pages[nextIndex])[0] : null;
  const nextText =
    nextIndex < pages.length ? Object.keys(pages[nextIndex])[0] : null;

  return {
    prev: prevText,
    prevLink: prevLink,
    next: nextText,
    nextLink: nextLink,
  };
}

export function getGithubLink(sidebarItems: any, pathName: any) {
  for (let i = 0; i < sidebarItems.length; i++) {
    const currentItem = sidebarItems[i];

    if (currentItem.pages) {
      const githubLink: any = getGithubLink(currentItem.pages, pathName);
      if (githubLink) {
        return githubLink;
      }
    }

    if (currentItem.id === pathName) {
      return currentItem.githubPath;
    }
  }
  return null; // Return null if the pathName doesn't match any item
}

export function showToc(sidebarItems: any, pathName: any) {
  const page = findPageById(pathName, sidebarItems);
  if (page?.metaData?.toc == false) {
    return false;
  } else {
    return true;
  }
}

// export function getMetaDataForCurrentFile(
//   currentRoute: any,
//   sidebarItems: any
// ) {
//   for (let obj of sidebarItems) {
//     if (obj.id && obj.id === currentRoute) {
//       return obj;
//     } else if (obj.pages && obj.pages.length > 0) {
//       let result: any = getMetaDataForCurrentFile(currentRoute, obj.pages);
//       if (result) {
//         return { metaData: result?.metaData, h1Tags: result?.h1Tags };
//       }
//     }
//   }
//   return { metaData: null, h1Tags: null };
// }

export function findPageById(id: any, pages: any) {
  for (const page of pages) {
    if (page.id === id) {
      return page;
    }
    if (page.pages) {
      const result: any = findPageById(id, page.pages);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
