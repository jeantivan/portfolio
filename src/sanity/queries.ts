import { groq } from "next-sanity";

import { TProject, TSiteSettings, TSkill, TSkillGroup } from "@/utils/types";

import { client } from "./client";

export const getProjects = async () => {
  return client.fetch<TProject[]>(
    groq`
      *[_type == 'project']{
        _id,
        title,
        slug{ current },
        mainImage,
        description, 
        isFeatured
      } | order(_publishAt desc)
    `
  );
};

export const getProjectsSlug = async () => {
  return client.fetch(
    groq`
      *[_type == 'project']{
        'slug': slug.current
      }`
  );
};

export const getProjectBySlug = async (slug: string) => {
  return client.fetch<TProject>(
    groq`
      *[_type == 'project' && slug.current == '${slug}']{
        _id,
        title,
        slug{ current },
        githubRepo,
        website,
        builtWith[]->{ name, slug },
        mainImage,
        description,
        content, 
        isFeatured
      }[0]
    `
  );
};

export const getTechSkills = async () => {
  return client.fetch<TSkill[]>(
    groq`
      *[_type == 'techSkills']{
        _id,
        name,
        slug { current },
        group,
        image, 
        order
      } | order(order asc)
    `
  );
};

export const getSkillsGroups = async () => {
  return client.fetch<TSkillGroup[]>(groq`
    *[_type == 'skillGroups']{
        _id,
        "title": {
          "es": title[_key == "es"][0].value,
          "en": title[_key == "en"][0].value
        },
        slug,
        content,
        techs[]->{_id, name, slug, image }
      }
    `);
};

export const siteSettings = async () => {
  return client.fetch<TSiteSettings>(groq`*[_type == 'siteSettings']{
    authorName,
    authorEmail,
    github,
    linkedin,
    CV{
      "asset": asset->url
    }
}[0]`);
};
