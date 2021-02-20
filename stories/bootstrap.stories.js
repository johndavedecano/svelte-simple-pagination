import { action } from '@storybook/addon-actions'
import Pagination from '../src/index'

export default {
  title: 'Pagination'
}

export const BasicExample = () => ({
  Component: Pagination,
  props: { active: 10, numpages: 50, limit: 10 }
})

export const CustomPrevNext = () => ({
  Component: Pagination,
  props: { active: 10, numpages: 50, limit: 10, prevLabel: 'before', nextLabel: 'after' }
})

export const NoPrevNext = () => ({
  Component: Pagination,
  props: { active: 10, numpages: 50, limit: 10, prevLabel: null, nextLabel: null }
})

export const Debug = () => ({
  Component: Pagination,
  props: { active: 10, numpages: 50, limit: 10, prevLabel: null, nextLabel: null, debug: true }
})

export const BootstrapLarge = () => ({
  Component: Pagination,
  props: {
    active: 10,
    numpages: 50,
    limit: 10,
    prevLabel: null,
    nextLabel: null,
    debug: true,
    customClass: 'pagination-lg'
  }
})

export const BootstrapSmall = () => ({
  Component: Pagination,
  props: {
    active: 10,
    numpages: 50,
    limit: 10,
    prevLabel: null,
    nextLabel: null,
    debug: true,
    customClass: 'pagination-sm'
  }
})

export const CustomPagination = () => ({
  Component: Pagination,
  props: { active: 10, numpages: 50, limit: 10, framework: 'plain' }
})
