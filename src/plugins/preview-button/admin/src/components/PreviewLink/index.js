    // ./src/plugins/preview-button/admin/src/components/PreviewLink/index.js
    import React from 'react';
    import { useCMEditViewDataManager } from '@strapi/helper-plugin';
    import Eye from '@strapi/icons/Eye';
    import { LinkButton } from '@strapi/design-system/LinkButton';
    
    const PreviewLink = () => {
      const {initialData} = useCMEditViewDataManager();
      if (!initialData.slug) {
        return null;
      }

      var type = window.location.pathname.substring(window.location.pathname.indexOf(".") + 1).split('-item')[0];
    
      return (
        <>
        {type == initialData.slug ?
          <LinkButton
            size="S"
            startIcon={<Eye/>}
            style={{width: '100%'}}
            // href={`${CLIENT_FRONTEND_URL}?secret=${CLIENT_PREVIEW_SECRET}&slug=${initialData.slug}`}
            href={`${CLIENT_FRONTEND_URL}/${initialData.slug}?preview=true`}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            title="page preview"
          >Preview
          </LinkButton>
        :
          <LinkButton
            size="S"
            startIcon={<Eye/>}
            style={{width: '100%'}}
            // href={`${CLIENT_FRONTEND_URL}?secret=${CLIENT_PREVIEW_SECRET}&slug=${initialData.slug}`}
            href={`${CLIENT_FRONTEND_URL}/${type.replace('discover', 'archive')}/${initialData.slug}?preview=true`}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            title="page preview"
          >Preview
          </LinkButton>
        }
        </>
      );
    };
    
    export default PreviewLink;