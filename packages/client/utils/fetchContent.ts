import fetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';
import { contentApi } from '../config/cms.json'

export function fetchContent<T = any>(key: string, context?: NextPageContext): Promise<T> {
    return fetch(`https://${context.query.contentApi || contentApi || process.env.contentApi}/content/key/${key}?depth=all&format=inlined`)
            .then(resp => resp.json())
            .then(body => body.content);
}

export function fetchContentById<T = any>(id: string, context?: NextPageContext): Promise<T> {
    return fetch(`https://${context.query.contentApi  || contentApi || process.env.contentApi}/content/id/${id}?depth=all&format=inlined`)
            .then(resp => resp.json())
            .then(body => body.content);
}