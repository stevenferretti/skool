import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Breadcrumbs extends React.Component<IBreadcrumbsProps> {
  public render() {
    const pageLinks = [{ id: '/', label: 'Home' }];
    this.props.currentPath.split('/').forEach(
      (path, key) =>
        path
          ? pageLinks.push({
              id: pageLinks[key - 1].id + path + '/',
              label: path
                .split('-')
                .map(p => p.charAt(0).toUpperCase() + p.slice(1))
                .join(' ')
            })
          : undefined
    );

    return (
      <section
        className="header divider layer-overlay overlay-dark-8"
        style={{ backgroundImage: 'url(/images/blackboard.jpg)' }}
      >
        <div className="container pt-70 pb-20">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title text-white">
                  {pageLinks.map((pageLink, index) => {
                    if (index === 0) {
                      return;
                    } else if (index === pageLinks.length - 1) {
                      return pageLink.label;
                    } else {
                      return pageLink.label + ' / ';
                    }
                  })}
                </h2>
                <ol className="breadcrumb text-left text-white mt-10">
                  {pageLinks.map(page => (
                    <li key={page.id}>
                      {this.returnLink(page.id, page.label)}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  public returnLink(id, label) {
    const nonRoutes = ['/athletics/'];
    if (nonRoutes.indexOf(id) > -1) {
      return label;
    } else {
      return <Link to={id}>{label}</Link>;
    }
  }
}

export interface IBreadcrumbsProps {
  currentPath: string;
}
