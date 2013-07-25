import codecs
try:
    from setuptools import setup, find_packages
    extra_setup = dict(
        install_requires = ['requests'],
        )
except ImportError:
    from distutils.core import setup
    extra_setup = {}

setup(
    name='sphinx-websupport2',
    version='1.2.3',
    author='Eric Holscher',
    author_email='eric@ericholscher.com',
    url='http://github.com/ericholscher/sphinx-websupport2',
    license='BSD',
    description='Improved Client for Sphinx Websupport package.',
    package_dir={'': '.'},
    packages=find_packages('.'),
    long_description=codecs.open("README.rst", "r", "utf-8").read(),
    **extra_setup
)
