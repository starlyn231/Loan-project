import { format } from "date-fns";
import { replaceGuionToSlashFromString } from "./StringUtil";

export const filterDocuments = (documents = []) => {
  return documents?.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  }).map((documentPersonal) => {
    if (documentPersonal.origin_doc === 0) {
      return documentPersonal;
    }
  }).map((document) => {
    if (typeof document === "object")
      return {
        name: `${document.name}.${document.extension}`,
        //pending to change
        documentType: document.extension,
        date: format(new Date(replaceGuionToSlashFromString(document.created_at)), 'yyyy-MM-dd HH:mm:ss'),
        url: document.url,
        type: document.extension
      }
  }).filter((filteredDocument) => {
    return typeof filteredDocument === "object"
  })
}

export const filterDocumentsInstitution = (documents = []) => {
  return documents?.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  }).map((documentInstitutional) => {
    if (documentInstitutional.origin_doc === 1) {
      return documentInstitutional;
    }
  }).map((document) => {
    if (typeof document === "object")
      return {
        name: `${document.name}.${document.extension}`,
        //pending to change
        documentType: document.extension,
        date: format(new Date(replaceGuionToSlashFromString(document.created_at)), 'yyyy-MM-dd HH:mm:ss'),
        url: document.url,
        type: document.extension
      }
  }).filter((filteredDocument) => {
    return typeof filteredDocument === "object"
  })
}

export const filterDetailsData = (detailsData = []) => {
  //{ item.type === "text" ? item.value : item.type === "checkbox" ? "Si" : item.labelValue }
  return detailsData.map((item) => {
    let returnValue;
    switch (item.type) {
      case "text":
        returnValue = {
          label: item.label,
          value: item.value
        }
        break;
      case "textarea":
        returnValue = {
          label: item.label,
          value: item.value
        }
        break;
      case "date":
        returnValue = {
          label: item.label,
          value: item.value
        }
        break;
      case "checkbox":
        returnValue = {
          label: item.label,
          value: "Si"
        }
        break;
      case "checkbox-group":
        returnValue = {
          label: item.label,
          value: "Si"
        }
        break;
      default:
        returnValue = {
          label: item.label,
          value: item.labelValue
        }
        break;
    }
    return returnValue
  })
}