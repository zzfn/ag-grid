#!/usr/bin/env bash

if [ "$#" -lt 2 ]
  then
    echo "You must supply a release version and release branch"
    exit 1
fi

RELEASE_VERSION=$1
RELEASE_BRANCH=$2

echo "$RELEASE_VERSION - $RELEASE_BRANCH"

NON_PACKAGE_JSON_COUNT=`git status --porcelain | grep -Ev "package.json|yarn.lock|version.ts|enterprise-modules/core/src/license/shared/licenseManager.ts" | wc -l`

if [ $NON_PACKAGE_JSON_COUNT -ne 0 ];
then
  echo "Only package.json, version.ts, yarn.lock of the licenseMangager files should be updated - please verify changeset.."
  git status --porcelain
  exit 1
fi

#git add .
#git commit -am "Release $RELEASE_VERSION Prep"
#git push -u origin "$RELEASE_BRANCH"
