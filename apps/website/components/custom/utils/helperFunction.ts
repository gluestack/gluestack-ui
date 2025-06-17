export function convertSidebarItemsToPathsArray(sidebarItems: any): any {
  const pages: any[] = [];

  if (
    !sidebarItems ||
    !sidebarItems.navigation ||
    !sidebarItems.navigation.sections
  ) {
    return pages;
  }

  const sections = sidebarItems.navigation.sections;

  function extractPagesFromSection(section: any) {
    if (section.subsections) {
      for (const subsection of section.subsections) {
        // Handle direct path items in subsections
        if (subsection.path) {
          const pageObj: any = {};
          pageObj[subsection.title] = subsection.path;
          pages.push(pageObj);
        }

        // Handle items within subsections
        if (subsection.items) {
          for (const item of subsection.items) {
            if (item.path) {
              const pageObj: any = {};
              pageObj[item.title] = item.path;
              pages.push(pageObj);
            }
          }
        }
      }
    }
  }

  for (const section of sections) {
    extractPagesFromSection(section);
  }

  return pages;
}

export function getPrevAndNextLinks(pages: any, currentRoute: any) {
  const currentIndex = pages.findIndex(
    (page: any) => Object.values(page)[0] === currentRoute
  );

  if (currentIndex === -1) {
    return {
      prev: null,
      prevLink: null,
      next: null,
      nextLink: null,
    };
  }

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
  if (
    !sidebarItems ||
    !sidebarItems.navigation ||
    !sidebarItems.navigation.sections
  ) {
    return null;
  }

  const sections = sidebarItems.navigation.sections;

  function searchInSection(section: any): any {
    if (section.subsections) {
      for (const subsection of section.subsections) {
        // Check direct path items in subsections
        if (subsection.path === pathName && subsection.githubPath) {
          return subsection.githubPath;
        }

        // Check items within subsections
        if (subsection.items) {
          for (const item of subsection.items) {
            if (item.path === pathName && item.githubPath) {
              return item.githubPath;
            }
          }
        }
      }
    }
    return null;
  }

  // First try to find an explicit githubPath
  for (const section of sections) {
    const githubLink = searchInSection(section);
    if (githubLink) {
      return githubLink;
    }
  }

  // If no explicit githubPath found, generate one based on the current path
  if (pathName && pathName.startsWith('/ui/docs/')) {
    // Convert path like '/ui/docs/components/button' to GitHub file path
    // Remove '/ui/docs/' prefix and add appropriate file extensions
    const relativePath = pathName.replace('/ui/docs/', '');

    // Map different sections to their corresponding file paths
    if (relativePath.startsWith('components/')) {
      const componentName = relativePath.replace('components/', '');
      return `https://github.com/gluestack/gluestack-ui/tree/feat/v3/src/components/ui/${componentName}/docs/index.mdx`;
    } else if (relativePath.startsWith('home/')) {
      const pagePath = relativePath.replace('home/', '');
      return `https://github.com/gluestack/gluestack-ui/tree/feat/v3/src/docs/${pagePath}/index.mdx`;
    } else if (relativePath.startsWith('apps/')) {
      const appPath = relativePath.replace('apps/', '');
      return `https://github.com/gluestack/gluestack-ui/tree/feat/v3/src/docs/apps/${appPath}/index.mdx`;
    } else {
      // For other paths, try a generic approach
      return `https://github.com/gluestack/gluestack-ui/tree/feat/v3/src/docs/${relativePath}/index.mdx`;
    }
  }

  return null;
}

export function showToc(sidebarItems: any, pathName: any) {
  const page = findPageByPath(pathName, sidebarItems);
  if (page?.metaData?.toc === false) {
    return false;
  } else {
    return true;
  }
}

export function findPageByPath(pathName: any, sidebarItems: any) {
  if (
    !sidebarItems ||
    !sidebarItems.navigation ||
    !sidebarItems.navigation.sections
  ) {
    return null;
  }

  const sections = sidebarItems.navigation.sections;

  function searchInSection(section: any): any {
    if (section.subsections) {
      for (const subsection of section.subsections) {
        // Check direct path items in subsections
        if (subsection.path === pathName) {
          return subsection;
        }

        // Check items within subsections
        if (subsection.items) {
          for (const item of subsection.items) {
            if (item.path === pathName) {
              return item;
            }
          }
        }
      }
    }
    return null;
  }

  for (const section of sections) {
    const result = searchInSection(section);
    if (result) {
      return result;
    }
  }

  return null;
}

// Legacy function name for backward compatibility
export function findPageById(id: any, pages: any) {
  return findPageByPath(id, pages);
}
