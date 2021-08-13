import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/all-projects')

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allPostsData.sort(({ categoly: a }, { categoly: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })

}

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const  getPostData = (id:string)  => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}